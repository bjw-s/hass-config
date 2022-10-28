"""Config flow for Sonos Cloud."""
import logging

from homeassistant.helpers import config_entry_oauth2_flow

from .const import DOMAIN

DEFAULT_SCOPE = "playback-control-all"


class OAuth2FlowHandler(
    config_entry_oauth2_flow.AbstractOAuth2FlowHandler, domain=DOMAIN
):
    """Config flow to handle Sonos Cloud OAuth2 authentication."""

    DOMAIN = DOMAIN

    @property
    def logger(self) -> logging.Logger:
        """Return logger."""
        return logging.getLogger(__name__)

    @property
    def extra_authorize_data(self) -> dict:
        """Extra data that needs to be appended to the authorize url."""
        return {"scope": DEFAULT_SCOPE}

    async def async_step_user(self, user_input=None):
        """Handle a flow start."""
        await self.async_set_unique_id(DOMAIN)

        if self._async_current_entries():
            return self.async_abort(reason="already_configured")

        return await super().async_step_user(user_input)
