import logging

<<<<<<< HEAD
from homeassistant.core import (
    HomeAssistant,
)
from homeassistant.const import (
    ATTR_NAME,
)

from . import const

_LOGGER = logging.getLogger(__name__)


def friendly_name_for_entity_id(entity_id: str, hass: HomeAssistant):
    sensor_config = hass.data[const.DOMAIN]["coordinator"].store.async_get_sensor(entity_id)

    if sensor_config and sensor_config[ATTR_NAME]:
        return sensor_config[ATTR_NAME]

    state = hass.states.get(entity_id)
    if state and state.attributes["friendly_name"]:
        return state.attributes["friendly_name"]

    return entity_id
=======

_LOGGER = logging.getLogger(__name__)
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
