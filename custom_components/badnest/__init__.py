"""The example integration."""
import voluptuous as vol
from homeassistant.helpers import config_validation as cv

from .api import NestAPI
from .const import DOMAIN, CONF_ISSUE_TOKEN, CONF_COOKIE, CONF_USER_ID, \
        CONF_ACCESS_TOKEN

CONFIG_SCHEMA = vol.Schema(
    {
        DOMAIN: vol.All(
            {
                vol.Required(CONF_ISSUE_TOKEN, default=""): cv.string,
                vol.Required(CONF_COOKIE, default=""): cv.string,
            }
        )
    },
    extra=vol.ALLOW_EXTRA,
)


def setup(hass, config):
    """Set up the badnest component."""
    if config.get(DOMAIN) is not None:
        issue_token = config[DOMAIN].get(CONF_ISSUE_TOKEN)
        cookie = config[DOMAIN].get(CONF_COOKIE)
    else:
        issue_token = None
        cookie = None

    hass.data[DOMAIN] = {
        'api': NestAPI(
            issue_token,
            cookie,
        ),
    }

    return True
