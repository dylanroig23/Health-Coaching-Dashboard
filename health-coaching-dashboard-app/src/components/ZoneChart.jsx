import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyZoneMinutesData } from "../scripts/getWeeklyZoneMinutesData";

/* Displays a graphic of the day's total zone minutes. Used in the Daily Dashboard. */

const ZoneChart = (dayOverview) => {
  const [zoneData, setNewZoneData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklyZoneData = await getWeeklyZoneMinutesData(currUser);
        setNewZoneData(weeklyZoneData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (zoneData.length > 0) {
    const l = [
      "Sunday Overview",
      "Monday Overview",
      "Tuesday Overview",
      "Wednesday Overview",
      "Thursday Overview",
      "Friday Overview",
      "Saturday Overview",
    ];
    const dayIndex = l.indexOf(dayOverview.dayOverview);
    var c = {
      series: [(zoneData[dayIndex].duration * 100) / 22],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              image: "zone.png",
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: false,
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -50,
                show: true,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                formatter: function (val) {
                  return parseInt(zoneData[dayIndex].duration);
                },
                color: "#111",
                fontSize: "36px",
                show: true,
                offsetY: 70,
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        fill: {
          colors: ["#FFD700"],
        },
        labels: ["Minutes"],
        offsetY: 70,
      },
    };
    return (
      <div>
        <div id="card">
          <div id="chart">
            <Chart
              options={c.options}
              series={c.series}
              type="radialBar"
              height={350}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
};

export default ZoneChart;
