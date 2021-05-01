import logging
import time
import attr
from collections import OrderedDict
from typing import MutableMapping, cast
from homeassistant.loader import bind_hass
from homeassistant.core import (callback, HomeAssistant)
from homeassistant.helpers.storage import Store

from homeassistant.const import (
    STATE_ALARM_ARMED_AWAY,
    STATE_ALARM_ARMED_HOME,
    STATE_ALARM_ARMED_NIGHT,
    STATE_ALARM_ARMED_CUSTOM_BYPASS,
)

from homeassistant.components.alarm_control_panel import (
    FORMAT_NUMBER as CODE_FORMAT_NUMBER,
)

from .const import (
    DOMAIN,
)

from .sensors import (
    SENSOR_TYPE_OTHER,
)

_LOGGER = logging.getLogger(__name__)

DATA_REGISTRY = f"{DOMAIN}_storage"
STORAGE_KEY = f"{DOMAIN}.storage"
STORAGE_VERSION = 2
SAVE_DELAY = 10


@attr.s(slots=True, frozen=True)
class ModeEntry:
    """Mode storage Entry."""

    enabled = attr.ib(type=bool, default=False)
    exit_time = attr.ib(type=int, default=0)
    entry_time = attr.ib(type=int, default=0)
    trigger_time = attr.ib(type=int, default=0)


@attr.s(slots=True, frozen=True)
class MqttConfig:
    """MQTT storage Entry."""

    enabled = attr.ib(type=bool, default=False)
    state_topic = attr.ib(type=str, default="alarmo/state")
    state_payload = attr.ib(type=dict, default={})
    command_topic = attr.ib(type=str, default="alarmo/command")
    command_payload = attr.ib(type=dict, default={})
    require_code = attr.ib(type=bool, default=True)
    event_topic = attr.ib(type=str, default="alarmo/event")


@attr.s(slots=True, frozen=True)
class MasterConfig:
    """Master storage Entry."""

    enabled = attr.ib(type=bool, default=True)
    name = attr.ib(type=str, default="master")


@attr.s(slots=True, frozen=True)
class AreaEntry:
    """Area storage Entry."""

    area_id = attr.ib(type=str, default=None)
    name = attr.ib(type=str, default=None)
    modes = attr.ib(type=[str, ModeEntry], default={
        STATE_ALARM_ARMED_AWAY: ModeEntry(),
        STATE_ALARM_ARMED_HOME: ModeEntry(),
        STATE_ALARM_ARMED_NIGHT: ModeEntry(),
        STATE_ALARM_ARMED_CUSTOM_BYPASS: ModeEntry()
    })


@attr.s(slots=True, frozen=True)
class Config:
    """(General) Config storage Entry."""

    code_arm_required = attr.ib(type=bool, default=False)
    code_disarm_required = attr.ib(type=bool, default=False)
    code_format = attr.ib(type=str, default=CODE_FORMAT_NUMBER)
    disarm_after_trigger = attr.ib(type=bool, default=False)
    master = attr.ib(type=MasterConfig, default=MasterConfig())
    mqtt = attr.ib(type=MqttConfig, default=MqttConfig())


@attr.s(slots=True, frozen=True)
class SensorEntry:
    """Sensor storage Entry."""

    entity_id = attr.ib(type=str, default=None)
    name = attr.ib(type=str, default="")
    type = attr.ib(type=str, default=SENSOR_TYPE_OTHER)
    modes = attr.ib(type=list, default=[])
    immediate = attr.ib(type=bool, default=False)
    always_on = attr.ib(type=bool, default=False)
    arm_on_close = attr.ib(type=bool, default=False)
    allow_open = attr.ib(type=bool, default=False)
    trigger_unavailable = attr.ib(type=bool, default=False)
    auto_bypass = attr.ib(type=bool, default=False)
    area = attr.ib(type=str, default=None)
    enabled = attr.ib(type=bool, default=True)


@attr.s(slots=True, frozen=True)
class UserEntry:
    """User storage Entry."""

    user_id = attr.ib(type=str, default=None)
    name = attr.ib(type=str, default="")
    code = attr.ib(type=str, default="")
    is_admin = attr.ib(type=bool, default=False)
    can_arm = attr.ib(type=bool, default=False)
    can_disarm = attr.ib(type=bool, default=False)
    is_override_code = attr.ib(type=bool, default=False)


@attr.s(slots=True, frozen=True)
class TriggerEntry:
    """Trigger storage Entry."""

    event = attr.ib(type=str, default="")
    state = attr.ib(type=str, default="")


@attr.s(slots=True, frozen=True)
class ActionEntry:
    """Action storage Entry."""

    service = attr.ib(type=str, default="")
    entity_id = attr.ib(type=str, default="")
    service_data = attr.ib(type=dict, default={})


@attr.s(slots=True, frozen=True)
class AutomationEntry:
    """Automation storage Entry."""

    automation_id = attr.ib(type=str, default=None)
    name = attr.ib(type=str, default="")
    modes = attr.ib(type=list, default=[])
    triggers = attr.ib(type=[TriggerEntry], default=[])
    actions = attr.ib(type=[ActionEntry], default=[])
    enabled = attr.ib(type=bool, default=True)
    is_notification = attr.ib(type=bool, default=False)
    area = attr.ib(type=str, default=None)


class MigratableStore(Store):
    async def _async_migrate_func(self, old_version, data: dict):

        if old_version == 1:
            area_id = str(int(time.time()))
            data["areas"] = [
                attr.asdict(AreaEntry(**{
                    "name": "Alarmo",
                    "modes": {
                        mode: attr.asdict(ModeEntry(
                            enabled=bool(config["enabled"]),
                            exit_time=int(config["leave_time"]),
                            entry_time=int(config["entry_time"]),
                            trigger_time=int(data["config"]["trigger_time"])
                        ))
                        for (mode, config) in data["config"]["modes"].items()
                    }
                }, area_id=area_id))
            ]

            if "sensors" in data:
                for sensor in data["sensors"]:
                    sensor["area"] = area_id

        return data


class AlarmoStorage:
    """Class to hold alarmo configuration data."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the storage."""
        self.hass = hass
        self.config: Config = Config()
        self.areas: MutableMapping[str, AreaEntry] = {}
        self.sensors: MutableMapping[str, SensorEntry] = {}
        self.users: MutableMapping[str, UserEntry] = {}
        self.automations: MutableMapping[str, AutomationEntry] = {}
        self._store = MigratableStore(hass, STORAGE_VERSION, STORAGE_KEY)

    async def async_load(self) -> None:
        """Load the registry of schedule entries."""
        data = await self._store.async_load()
        config: Config = Config()
        areas: "OrderedDict[str, AreaEntry]" = OrderedDict()
        sensors: "OrderedDict[str, SensorEntry]" = OrderedDict()
        users: "OrderedDict[str, UserEntry]" = OrderedDict()
        automations: "OrderedDict[str, AutomationEntry]" = OrderedDict()

        if data is not None:
            config = Config(
                code_arm_required=data["config"]["code_arm_required"],
                code_disarm_required=data["config"]["code_disarm_required"],
                code_format=data["config"]["code_format"],
                disarm_after_trigger=data["config"]["disarm_after_trigger"]
            )

            if "mqtt" in data["config"]:
                config = attr.evolve(config, **{
                    "mqtt": MqttConfig(**data["config"]["mqtt"]),
                })

            if "master" in data["config"]:
                config = attr.evolve(config, **{
                    "master": MasterConfig(**data["config"]["master"]),
                })

            if "areas" in data:
                for area in data["areas"]:
                    modes = {
                        mode: ModeEntry(
                            enabled=config["enabled"],
                            exit_time=config["exit_time"],
                            entry_time=config["entry_time"],
                            trigger_time=config["trigger_time"]
                        )
                        for (mode, config) in area["modes"].items()
                    }
                    areas[area["area_id"]] = AreaEntry(
                        area_id=area["area_id"],
                        name=area["name"],
                        modes=modes
                    )

            if "sensors" in data:
                for sensor in data["sensors"]:
                    sensors[sensor["entity_id"]] = SensorEntry(**sensor)

            if "users" in data:
                for user in data["users"]:
                    users[user["user_id"]] = UserEntry(**user)

            if "automations" in data:
                for automation in data["automations"]:
                    automations[automation["automation_id"]] = AutomationEntry(**automation)

        self.config = config
        self.areas = areas
        self.sensors = sensors
        self.automations = automations
        self.users = users

        if not areas:
            self.async_create_area({
                "name": "Alarmo",
                "modes": {
                    STATE_ALARM_ARMED_AWAY: attr.asdict(
                        ModeEntry(
                            enabled=True,
                            exit_time=60,
                            entry_time=60,
                            trigger_time=1800
                        )
                    ),
                    STATE_ALARM_ARMED_HOME: attr.asdict(
                        ModeEntry(
                            enabled=True,
                            trigger_time=1800
                        )
                    ),
                    STATE_ALARM_ARMED_NIGHT: attr.asdict(
                        ModeEntry()
                    ),
                    STATE_ALARM_ARMED_CUSTOM_BYPASS: attr.asdict(
                        ModeEntry()
                    )
                }
            })

    @callback
    def async_schedule_save(self) -> None:
        """Schedule saving the registry of alarmo."""
        self._store.async_delay_save(self._data_to_save, SAVE_DELAY)

    async def async_save(self) -> None:
        """Save the registry of alarmo."""
        await self._store.async_save(self._data_to_save())

    @callback
    def _data_to_save(self) -> dict:
        """Return data for the registry for alarmo to store in a file."""
        store_data = {
            "config": attr.asdict(self.config),
        }

        store_data["areas"] = [
            attr.asdict(entry) for entry in self.areas.values()
        ]
        store_data["sensors"] = [
            attr.asdict(entry) for entry in self.sensors.values()
        ]
        store_data["users"] = [
            attr.asdict(entry) for entry in self.users.values()
        ]
        store_data["automations"] = [
            attr.asdict(entry) for entry in self.automations.values()
        ]

        return store_data

    async def async_delete(self):
        """Delete config."""
        _LOGGER.warning("Removing alarmo configuration data!")
        await self._store.async_remove()

    @callback
    def async_get_config(self):
        return attr.asdict(self.config)

    @callback
    def async_update_config(self, changes: dict):
        """Update existing config."""

        old = self.config
        new = self.config = attr.evolve(old, **changes)
        self.async_schedule_save()
        return attr.asdict(new)

    @callback
    def async_update_mode_config(self, mode: str, changes: dict):
        """Update existing config."""

        modes = self.config.modes
        old = (
            self.config.modes[mode]
            if mode in self.config.modes
            else ModeEntry()
        )
        new = attr.evolve(old, **changes)
        modes[mode] = new
        self.config = attr.evolve(self.config, **{"modes": modes})
        self.async_schedule_save()
        return new

    @callback
    def async_get_area(self, area_id) -> AreaEntry:
        """Get an existing AreaEntry by id."""
        res = self.areas.get(area_id)
        return attr.asdict(res) if res else None

    @callback
    def async_get_areas(self):
        """Get an existing AreaEntry by id."""
        res = {}
        for (key, val) in self.areas.items():
            res[key] = attr.asdict(val)
        return res

    @callback
    def async_create_area(self, data: dict) -> AreaEntry:
        """Create a new AreaEntry."""
        area_id = str(int(time.time()))
        new_area = AreaEntry(**data, area_id=area_id)
        self.areas[area_id] = new_area
        self.async_schedule_save()
        return attr.asdict(new_area)

    @callback
    def async_delete_area(self, area_id: str) -> None:
        """Delete AreaEntry."""
        if area_id in self.areas:
            del self.areas[area_id]
            self.async_schedule_save()
            return True
        return False

    @callback
    def async_update_area(self, area_id: str, changes: dict) -> AreaEntry:
        """Update existing self."""
        old = self.areas[area_id]
        new = self.areas[area_id] = attr.evolve(old, **changes)
        self.async_schedule_save()
        return attr.asdict(new)

    @callback
    def async_get_sensor(self, entity_id) -> SensorEntry:
        """Get an existing SensorEntry by id."""
        res = self.sensors.get(entity_id)
        return attr.asdict(res) if res else None

    @callback
    def async_get_sensors(self):
        """Get an existing SensorEntry by id."""
        res = {}
        for (key, val) in self.sensors.items():
            res[key] = attr.asdict(val)
        return res

    @callback
    def async_create_sensor(self, entity_id: str, data: dict) -> SensorEntry:
        """Create a new SensorEntry."""
        if entity_id in self.sensors:
            return False
        new_sensor = SensorEntry(**data, entity_id=entity_id)
        self.sensors[entity_id] = new_sensor
        self.async_schedule_save()
        return new_sensor

    @callback
    def async_delete_sensor(self, entity_id: str) -> None:
        """Delete SensorEntry."""
        if entity_id in self.sensors:
            del self.sensors[entity_id]
            self.async_schedule_save()
            return True
        return False

    @callback
    def async_update_sensor(self, entity_id: str, changes: dict) -> SensorEntry:
        """Update existing SensorEntry."""
        old = self.sensors[entity_id]
        new = self.sensors[entity_id] = attr.evolve(old, **changes)
        self.async_schedule_save()
        return new

    @callback
    def async_get_user(self, user_id) -> UserEntry:
        """Get an existing UserEntry by id."""
        res = self.users.get(user_id)
        return attr.asdict(res) if res else None

    @callback
    def async_get_users(self):
        """Get an existing UserEntry by id."""
        res = {}
        for (key, val) in self.users.items():
            res[key] = attr.asdict(val)
        return res

    @callback
    def async_create_user(self, data: dict) -> UserEntry:
        """Create a new UserEntry."""
        user_id = str(int(time.time()))
        new_user = UserEntry(**data, user_id=user_id)
        self.users[user_id] = new_user
        self.async_schedule_save()
        return new_user

    @callback
    def async_delete_user(self, user_id: str) -> None:
        """Delete UserEntry."""
        if user_id in self.users:
            del self.users[user_id]
            self.async_schedule_save()
            return True
        return False

    @callback
    def async_update_user(self, user_id: str, changes: dict) -> UserEntry:
        """Update existing UserEntry."""
        old = self.users[user_id]
        new = self.users[user_id] = attr.evolve(old, **changes)
        self.async_schedule_save()
        return new

    @callback
    def async_get_automations(self):
        """Get an existing AutomationEntry by id."""
        res = {}
        for (key, val) in self.automations.items():
            res[key] = attr.asdict(val)
        return res

    @callback
    def async_create_automation(self, data: dict) -> AutomationEntry:
        """Create a new AutomationEntry."""
        automation_id = str(int(time.time()))
        if "area" in data and not data["area"]:
            data["area"] = None
        new_automation = AutomationEntry(**data, automation_id=automation_id)
        self.automations[automation_id] = new_automation
        self.async_schedule_save()
        return new_automation

    @callback
    def async_delete_automation(self, automation_id: str) -> None:
        """Delete AutomationEntry."""
        if automation_id in self.automations:
            del self.automations[automation_id]
            self.async_schedule_save()
            return True
        return False

    @callback
    def async_update_automation(self, automation_id: str, changes: dict) -> AutomationEntry:
        """Update existing AutomationEntry."""
        if "area" in changes and not changes["area"]:
            changes["area"] = None
        old = self.automations[automation_id]
        new = self.automations[automation_id] = attr.evolve(old, **changes)
        self.async_schedule_save()
        return new


@bind_hass
async def async_get_registry(hass: HomeAssistant) -> AlarmoStorage:
    """Return alarmo storage instance."""
    task = hass.data.get(DATA_REGISTRY)

    if task is None:

        async def _load_reg() -> AlarmoStorage:
            registry = AlarmoStorage(hass)
            await registry.async_load()
            return registry

        task = hass.data[DATA_REGISTRY] = hass.async_create_task(_load_reg())

    return cast(AlarmoStorage, await task)
