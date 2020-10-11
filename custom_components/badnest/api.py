import logging
import requests

from functools import wraps
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry
from requests.exceptions import HTTPError, RequestException, RetryError

API_URL = "https://home.nest.com"
CAMERA_WEBAPI_BASE = "https://webapi.camera.home.nest.com"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) " \
             "AppleWebKit/537.36 (KHTML, like Gecko) " \
             "Chrome/75.0.3770.100 Safari/537.36"
URL_JWT = "https://nestauthproxyservice-pa.googleapis.com/v1/issue_jwt"

RETRY_NUM = 5
RETRY_BACKOFF = 0.5
RETRY_METHODS = frozenset(
    [
        'HEAD',
        'TRACE',
        'GET',
        'PUT',
        'OPTIONS',
        'DELETE',
        'POST'
    ]
)
RETRY_STATUS_CODES = frozenset(
    [
        429,
        500,
        502,
        503
    ]
)
RETRY_STATUS = 3

REAUTH_STATUS_CODES = frozenset(
    [
        401,
        403
    ]
)
# Nest website's (public) API key
NEST_API_KEY = "AIzaSyAdkSIMNc51XGNEAYWasX9UOWkS5P6sZE4"

KNOWN_BUCKET_TYPES = [
    # Thermostats
    "device",
    "shared",
    # Protect
    "topaz",
    # Temperature sensors
    "kryptonite",
]

_LOGGER = logging.getLogger(__name__)


class Decorators(object):
    @classmethod
    def refresh_login(self, func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            try:
                func(*args, **kwargs)
            except AuthorizationRequired:
                _LOGGER.debug("Refreshing login info")
                args[0].login()
                func(*args, **kwargs)
            except (HTTPError, RetryError) as e:
                _LOGGER.error(f"Upstream error: {e}")
            except RequestException as e:
                _LOGGER.error(e)
            return func(*args, **kwargs)
        return wrapper


class AuthorizationRequired(Exception):
    pass


class NestAPI():
    def __init__(self,
                 issue_token,
                 cookie):
        self.device_data = {}
        self._wheres = {}
        self._user_id = None
        self._access_token = None
        self._retries = Retry(
            total=RETRY_NUM,
            backoff_factor=RETRY_BACKOFF,
            method_whitelist=RETRY_METHODS,
            status_forcelist=RETRY_STATUS_CODES,
            status=RETRY_STATUS
        )
        self._adapter = HTTPAdapter(max_retries=self._retries)
        self._session = requests.Session()
        self._session.headers.update({
            "Referer": API_URL,
            "User-Agent": USER_AGENT,
        })
        self._session.mount("https://", self._adapter)
        self._session.mount("http://", self._adapter)
        self._issue_token = issue_token
        self._cookie = cookie
        self._czfe_url = None
        self.cameras = []
        self.thermostats = set()
        self.temperature_sensors = set()
        self.protects = set()
        self.login()
        self._get_devices()
        self.update()
        for camera in self.cameras:
            self.update_camera(camera)

    def __getitem__(self, name):
        return getattr(self, name)

    def __setitem__(self, name, value):
        return setattr(self, name, value)

    def __delitem__(self, name):
        return delattr(self, name)

    def __contains__(self, name):
        return hasattr(self, name)

    def _check_request(self, r):
        if r.status_code in REAUTH_STATUS_CODES:
            raise AuthorizationRequired

        r.raise_for_status()

    def login(self):
        headers = {
            'User-Agent': USER_AGENT,
            'Sec-Fetch-Mode': 'cors',
            'X-Requested-With': 'XmlHttpRequest',
            'Referer': 'https://accounts.google.com/o/oauth2/iframe',
            'cookie': self._cookie
        }
        try:
            r = self._session.get(url=self._issue_token, headers=headers)
            r.raise_for_status()
        except (HTTPError, RetryError) as e:
            _LOGGER.error(f"Upstream error: {e}")
        except RequestException as e:
            _LOGGER.error(e)

        access_token = r.json()['access_token']

        headers = {
            'User-Agent': USER_AGENT,
            'Authorization': 'Bearer ' + access_token,
            'x-goog-api-key': NEST_API_KEY,
            'Referer': API_URL
        }
        params = {
            "embed_google_oauth_access_token": True,
            "expire_after": '3600s',
            "google_oauth_access_token": access_token,
            "policy_id": 'authproxy-oauth-policy'
        }
        try:
            r = self._session.post(url=URL_JWT, headers=headers, params=params)
            r.raise_for_status()
        except (HTTPError, RetryError) as e:
            _LOGGER.error(f"Upstream error: {e}")
        except RequestException as e:
            _LOGGER.error(e)

        self._user_id = r.json()['claims']['subject']['nestId']['id']
        self._access_token = r.json()['jwt']

        self._session.headers.update({
            "Authorization": f"Basic {self._access_token}",
            "cookie": f'user_token={self._access_token}',
        })

    @Decorators.refresh_login
    def _get_cameras(self):
        cameras = []

        r = self._session.get(
            f"{CAMERA_WEBAPI_BASE}/api/cameras."
            + "get_owned_and_member_of_with_properties",
        )

        self._check_request(r)

        for camera in r.json()["items"]:
            cameras.append(camera['uuid'])
            self.device_data[camera['uuid']] = {}
            self.device_data[camera['uuid']]['camera_url'] = \
                camera['nexus_api_nest_domain_host']
        return cameras

    @Decorators.refresh_login
    def _get_devices(self):
        r = self._session.post(
            f"{API_URL}/api/0.1/user/{self._user_id}/app_launch",
            json={
                "known_bucket_types": ["buckets"],
                "known_bucket_versions": [],
            }
        )

        self._check_request(r)

        self._czfe_url = r.json()["service_urls"]["urls"]["czfe_url"]

        buckets = r.json()['updated_buckets'][0]['value']['buckets']
        for bucket in buckets:
            if bucket.startswith('topaz.'):
                sn = bucket.replace('topaz.', '')
                self.protects.add(sn)
                self.device_data[sn] = {}
            elif bucket.startswith('kryptonite.'):
                sn = bucket.replace('kryptonite.', '')
                self.temperature_sensors.add(sn)
                self.device_data[sn] = {}
            elif bucket.startswith('device.'):
                sn = bucket.replace('device.', '')
                self.thermostats.add(sn)
                self.temperature_sensors.add(sn)
                self.device_data[sn] = {}

        self.cameras = self._get_cameras()

    def _map_nest_protect_state(self, value):
        if value == 0:
            return "Ok"
        elif value == 1 or value == 2:
            return "Warning"
        elif value == 3:
            return "Emergency"
        else:
            return "Unknown"

    @Decorators.refresh_login
    def update_camera(self, camera):
        r = self._session.get(
            f"{API_URL}/dropcam/api/cameras/{camera}"
        )

        self._check_request(r)

        sensor_data = r.json()[0]
        self.device_data[camera]['name'] = \
            sensor_data["name"]
        self.device_data[camera]['is_online'] = \
            sensor_data["is_online"]
        self.device_data[camera]['is_streaming'] = \
            sensor_data["is_streaming"]
        self.device_data[camera]['battery_voltage'] = \
            sensor_data["rq_battery_battery_volt"]
        self.device_data[camera]['ac_voltage'] = \
            sensor_data["rq_battery_vbridge_volt"]
        self.device_data[camera]['location'] = \
            sensor_data["location"]
        self.device_data[camera]['data_tier'] = \
            sensor_data["properties"]["streaming.data-usage-tier"]

    @Decorators.refresh_login
    def _get_names(self):
        """Get friendly names"""
        r = self._session.post(
            f"{API_URL}/api/0.1/user/{self._user_id}/app_launch",
            json={
                "known_bucket_types": ["where"],
                "known_bucket_versions": [],
            }
        )

        self._check_request(r)

        for bucket in r.json()["updated_buckets"]:
            sensor_data = bucket["value"]
            sn = bucket["object_key"].split('.')[1]
            if bucket["object_key"].startswith(
                    f"where.{sn}"):
                wheres = sensor_data['wheres']
                for where in wheres:
                    self._wheres[where['where_id']] = where['name']

    @Decorators.refresh_login
    def update(self):
        self._get_names()

        r = self._session.post(
            f"{API_URL}/api/0.1/user/{self._user_id}/app_launch",
            json={
                "known_bucket_types": KNOWN_BUCKET_TYPES,
                "known_bucket_versions": [],
            }
        )

        self._check_request(r)

        for bucket in r.json()["updated_buckets"]:
            sensor_data = bucket["value"]
            sn = bucket["object_key"].split('.')[1]
            # Thermostats (thermostat and sensors system)
            if bucket["object_key"].startswith(
                    f"shared.{sn}"):
                self.device_data[sn]['current_temperature'] = \
                    sensor_data["current_temperature"]
                self.device_data[sn]['target_temperature'] = \
                    sensor_data["target_temperature"]
                self.device_data[sn]['hvac_ac_state'] = \
                    sensor_data["hvac_ac_state"]
                self.device_data[sn]['hvac_heater_state'] = \
                    sensor_data["hvac_heater_state"]
                self.device_data[sn]['target_temperature_high'] = \
                    sensor_data["target_temperature_high"]
                self.device_data[sn]['target_temperature_low'] = \
                    sensor_data["target_temperature_low"]
                self.device_data[sn]['can_heat'] = \
                    sensor_data["can_heat"]
                self.device_data[sn]['can_cool'] = \
                    sensor_data["can_cool"]
                self.device_data[sn]['mode'] = \
                    sensor_data["target_temperature_type"]
                if self.device_data[sn]['hvac_ac_state']:
                    self.device_data[sn]['action'] = "cooling"
                elif self.device_data[sn]['hvac_heater_state']:
                    self.device_data[sn]['action'] = "heating"
                else:
                    self.device_data[sn]['action'] = "off"
            # Thermostats, pt 2
            elif bucket["object_key"].startswith(
                    f"device.{sn}"):
                self.device_data[sn]['name'] = self._wheres[
                    sensor_data['where_id']
                ]
                # When acts as a sensor
                if 'backplate_temperature' in sensor_data:
                    self.device_data[sn]['temperature'] = \
                        sensor_data['backplate_temperature']
                if 'battery_level' in sensor_data:
                    self.device_data[sn]['battery_level'] = \
                        sensor_data['battery_level']

                if sensor_data.get('description', None):
                    self.device_data[sn]['name'] += \
                        f' ({sensor_data["description"]})'
                self.device_data[sn]['name'] += ' Thermostat'
                self.device_data[sn]['has_fan'] = \
                    sensor_data["has_fan"]
                self.device_data[sn]['fan'] = \
                    sensor_data["fan_timer_timeout"]
                self.device_data[sn]['current_humidity'] = \
                    sensor_data["current_humidity"]
                self.device_data[sn]['target_humidity'] = \
                    sensor_data["target_humidity"]
                self.device_data[sn]['target_humidity_enabled'] = \
                    sensor_data["target_humidity_enabled"]
                if sensor_data["eco"]["mode"] == 'manual-eco' or \
                        sensor_data["eco"]["mode"] == 'auto-eco':
                    self.device_data[sn]['eco'] = True
                else:
                    self.device_data[sn]['eco'] = False
            # Protect
            elif bucket["object_key"].startswith(
                    f"topaz.{sn}"):
                self.device_data[sn]['name'] = self._wheres[
                    sensor_data['where_id']
                ]
                if sensor_data.get('description', None):
                    self.device_data[sn]['name'] += \
                        f' ({sensor_data["description"]})'
                self.device_data[sn]['name'] += ' Protect'
                self.device_data[sn]['co_status'] = \
                    self._map_nest_protect_state(sensor_data['co_status'])
                self.device_data[sn]['smoke_status'] = \
                    self._map_nest_protect_state(
                            sensor_data['smoke_status'])
                self.device_data[sn]['battery_health_state'] = \
                    self._map_nest_protect_state(
                            sensor_data['battery_health_state'])
            # Temperature sensors
            elif bucket["object_key"].startswith(
                    f"kryptonite.{sn}"):
                self.device_data[sn]['name'] = self._wheres[
                    sensor_data['where_id']
                ]
                if sensor_data.get('description', None):
                    self.device_data[sn]['name'] += \
                        f' ({sensor_data["description"]})'
                self.device_data[sn]['name'] += ' Temperature'
                self.device_data[sn]['temperature'] = \
                    sensor_data['current_temperature']
                self.device_data[sn]['battery_level'] = \
                    sensor_data['battery_level']

    @Decorators.refresh_login
    def thermostat_set_temperature(self, device_id, temp, temp_high=None):
        if device_id not in self.thermostats:
            return

        if temp_high is None:
            value = {"target_temperature": temp}
        else:
            value = {
                        "target_temperature_low": temp,
                        "target_temperature_high": temp_high,
                    }

        r = self._session.post(
            f"{self._czfe_url}/v5/put",
            json={
                "objects": [
                    {
                        "object_key": f'shared.{device_id}',
                        "op": "MERGE",
                        "value": value,
                    }
                ]
            }
        )

        self._check_request(r)

    @Decorators.refresh_login
    def thermostat_set_target_humidity(self, device_id, humidity):
        if device_id not in self.thermostats:
            return

        r = self._session.post(
            f"{self._czfe_url}/v5/put",
            json={
                "objects": [
                    {
                        "object_key": f'device.{device_id}',
                        "op": "MERGE",
                        "value": {"target_humidity": humidity},
                    }
                ]
            }
        )

        self._check_request(r)

    @Decorators.refresh_login
    def thermostat_set_mode(self, device_id, mode):
        if device_id not in self.thermostats:
            return

        r = self._session.post(
            f"{self._czfe_url}/v5/put",
            json={
                "objects": [
                    {
                        "object_key": f'shared.{device_id}',
                        "op": "MERGE",
                        "value": {"target_temperature_type": mode},
                    }
                ]
            }
        )

        self._check_request(r)

    @Decorators.refresh_login
    def thermostat_set_fan(self, device_id, date):
        if device_id not in self.thermostats:
            return

        r = self._session.post(
            f"{self._czfe_url}/v5/put",
            json={
                "objects": [
                    {
                        "object_key": f'device.{device_id}',
                        "op": "MERGE",
                        "value": {"fan_timer_timeout": date},
                    }
                ]
            }
        )

        self._check_request(r)

    @Decorators.refresh_login
    def thermostat_set_eco_mode(self, device_id, state):
        if device_id not in self.thermostats:
            return

        mode = 'manual-eco' if state else 'schedule'
        r = self._session.post(
            f"{self._czfe_url}/v5/put",
            json={
                "objects": [
                    {
                        "object_key": f'device.{device_id}',
                        "op": "MERGE",
                        "value": {"eco": {"mode": mode}},
                    }
                ]
            }
        )

        self._check_request(r)

    @Decorators.refresh_login
    def _camera_set_properties(self, device_id, property, value):
        if device_id not in self.cameras:
            return

        r = self._session.post(
            f"{CAMERA_WEBAPI_BASE}/api/dropcams.set_properties",
            data={property: value, "uuid": device_id},
        )

        self._check_request(r)

        return r.json()["items"]

    def camera_turn_off(self, device_id):
        if device_id not in self.cameras:
            return

        return self._camera_set_properties(
                device_id, "streaming.enabled", "false")

    def camera_turn_on(self, device_id):
        if device_id not in self.cameras:
            return

        return self._camera_set_properties(
                device_id, "streaming.enabled", "true")

    @Decorators.refresh_login
    def camera_get_image(self, device_id, now):
        if device_id not in self.cameras:
            return

        camera_url = self.device_data[device_id]['camera_url']

        r = self._session.get(
            f'https://{camera_url}/get_image?uuid={device_id}' +
            f'&cachebuster={now}',
        )

        # We poll before images are created if the camera is turned on, so
        # filter out 404's.
        if not r.status_code == 404:
            self._check_request(r)

        return r.content
