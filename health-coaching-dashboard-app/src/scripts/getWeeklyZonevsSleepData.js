import { getWeeklySleepData } from "./getWeeklySleepData";
import { getWeeklyZoneMinutesData } from "./getWeeklyZoneMinutesData";

export const getWeeklyZonevsSleepData = async () => {
  const zoneData = await getWeeklyZoneMinutesData();
  const sleepData = await getWeeklySleepData();
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

    for (let i = 0; i < 7; i++) {
      formattedSleepvsZoneData[i].sleep = sleepData[i].duration;
      formattedSleepvsZoneData[i].zone = zoneData[i].duration;
    }

    return formattedSleepvsZoneData;
  } else {
    console.log("zoneData or sleepData was null");
  }
};
