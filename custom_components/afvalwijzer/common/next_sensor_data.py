from datetime import date, datetime
from ..const.const import _LOGGER


class NextSensorData:

    def __init__(self, waste_data_after_date_selected, default_label):
        self.waste_data_after_date_selected = sorted(
            waste_data_after_date_selected, key=lambda d: d["date"]
        )
        self.today_date = datetime.now()
        self.default_label = default_label

        self.next_waste_date = self.__get_next_waste_date()
        self.next_waste_in_days = self.__get_next_waste_in_days()
        self.next_waste_type = self.__get_next_waste_type()

        self.data = self._gen_next_sensor_data()

    def __get_next_waste_date(self):
        try:
            return self.waste_data_after_date_selected[0]["date"]
        except IndexError:
            _LOGGER.error("No waste data found after the selected date.")
            return self.default_label

    def __get_next_waste_in_days(self):
        try:
            return abs(self.next_waste_date.date() - date.today()).days
        except Exception as err:
            _LOGGER.error(f"Error occurred in __get_next_waste_in_days: {err}")
            return self.default_label

    def __get_next_waste_type(self):
        try:
            return [waste["type"] for waste in self.waste_data_after_date_selected if waste["date"] == self.next_waste_date] or [self.default_label]
        except Exception as err:
            _LOGGER.error(f"Error occurred in __get_next_waste_type: {err}")
            return [self.default_label]

    def _gen_next_sensor_data(self):
        try:
            return {
                "next_date": self.next_waste_date,
                "next_in_days": self.next_waste_in_days,
                "next_type": ", ".join(self.next_waste_type)
            }
        except Exception as err:
            _LOGGER.error(f"Error occurred in _gen_next_sensor_data: {err}")
            return {}

    @property
    def next_sensor_data(self):
        return self.data
