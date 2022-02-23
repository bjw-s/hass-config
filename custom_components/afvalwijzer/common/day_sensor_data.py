from datetime import datetime, timedelta

from ..const.const import _LOGGER


class DaySensorData(object):

    ##########################################################################
    #  INIT
    ##########################################################################
    def __init__(
        self,
        waste_data_formatted,
        default_label,
    ):
        TODAY = datetime.today().strftime("%d-%m-%Y")

        self.waste_data_formatted = sorted(
            waste_data_formatted, key=lambda d: d["date"]
        )
        self.today_date = datetime.strptime(TODAY, "%d-%m-%Y")
        self.tomorrow_date = datetime.strptime(TODAY, "%d-%m-%Y") + timedelta(days=1)
        self.day_after_tomorrow_date = datetime.strptime(TODAY, "%d-%m-%Y") + timedelta(
            days=2
        )
        self.default_label = default_label

        self.waste_data_today = self.__gen_day_sensor(self.today_date)
        self.waste_data_tomorrow = self.__gen_day_sensor(self.tomorrow_date)
        self.waste_data_dot = self.__gen_day_sensor(self.day_after_tomorrow_date)

        self.data = self._gen_day_sensor_data()

    ##########################################################################
    #  CREATE TODAY, TOMORROW, DOT SENSOR(S)
    ##########################################################################

    # Generate sensor data per date
    def __gen_day_sensor(self, date):
        day = list()
        try:
            for waste in self.waste_data_formatted:
                item_date = waste["date"]
                item_name = waste["type"]
                if item_date == date:
                    day.append(item_name)
            if not day:
                day.append(self.default_label)
        except Exception as err:
            _LOGGER.error("Other error occurred __gen_day_sensor: %s", err)
        return day

    # Generate sensor data for today, tomorrow, day after tomorrow
    def _gen_day_sensor_data(self):
        day_sensor = dict()
        try:
            day_sensor["today"] = ", ".join(self.waste_data_today)
            day_sensor["tomorrow"] = ", ".join(self.waste_data_tomorrow)
            day_sensor["day_after_tomorrow"] = ", ".join(self.waste_data_dot)
        except Exception as err:
            _LOGGER.error("Other error occurred _gen_day_sensor_data: %s", err)
        return day_sensor

    @property
    def day_sensor_data(self):
        return self.data
