import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklySleepData } from "../scripts/getWeeklySleepData";

/* Chart graphic used on the DailyDashboard pages. Grabs sleep data for a particular day */

const SleepChart = (dayOverview) => {
  const [sleepData, setNewSleepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklySleepData = await getWeeklySleepData(currUser);
        setNewSleepData(weeklySleepData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (sleepData.length > 0) {
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
      series: [(sleepData[dayIndex].duration * 100) / 8],
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
              image: "sleep.png",
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
                  return parseInt(sleepData[dayIndex].duration);
                },
                color: "#111",
                fontSize: "36px",
                show: true,
                offsetY: 70,
              },
            },
          },
        },
        fill: {
          colors: ["#006FB9"],
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Hours"],
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

export default SleepChart;
