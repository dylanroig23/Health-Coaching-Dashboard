import { fetchWeeklySleepData } from "./getWeeklySleepData";
import { fetchWeeklyZoneMinutesData } from "./getWeeklyZoneMinutesData";

export const getWeeklyZonevsSleepData = async (currentUser) => {
  const zoneData = await fetchWeeklyZoneMinutesData(currentUser);
  const sleepData = await fetchWeeklySleepData(currentUser);
  if (zoneData != null && sleepData != null) {
    const formattedSleepvsZoneData = [
      {
        day: "Sun.",
        sleep: 0,
        zone: 0,
      },
      {
        day: "Mon.",
        sleep: 0,
        zone: 0,
      },
      {
        day: "Tues.",
        sleep: 0,
        zone: 0,
      },
      {
        day: "Wed.",
        sleep: 0,
        zone: 0,
      },
      {
        day: "Thurs.",
        sleep: 0,
        zone: 0,
      },
      {
        day: "Fri.",
        sleep: 0,
        zone: 0,
      },
      {
        day: "Sat.",
        sleep: 0,
        zone: 0,
      },
    ];

    zoneData["activities-active-zone-minutes"].reverse().forEach((entry) => {
      const date = new Date(entry.dateTime);

      formattedSleepvsZoneData[date.getDay()].zone +=
        entry.value.activeZoneMinutes / 60;
    });

    sleepData.sleep.reverse().forEach((entry) => {
      const date = new Date(entry.dateOfSleep);

      formattedSleepvsZoneData[date.getDay()].sleep += entry.duration / 3600000;
    });

    return formattedSleepvsZoneData;
  } else {
    console.log("zoneData or sleepData was null");
  }
};
