import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getWeeklyStepsData } from "../scripts/getWeeklyStepsData";

const StepsChart = (dayOverview) => {
  const [stepsData, setNewStepsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weeklyStepsData = await getWeeklyStepsData();
        setNewStepsData(weeklyStepsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (stepsData != null && stepsData.length > 0) {
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
      series: [(stepsData[dayIndex].steps * 100) / 10000],
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
              image: "steps.png",
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
                  return parseInt(stepsData[dayIndex].steps);
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
          colors: ["#ABE5A1"],
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Steps"],
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
  } else {
    return (
      <>
        <h2>Requested Week has Not Yet Occurred</h2>
      </>
    );
  }
};

export default StepsChart;
