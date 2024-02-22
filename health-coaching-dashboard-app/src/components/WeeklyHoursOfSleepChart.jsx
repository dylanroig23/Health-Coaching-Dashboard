import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklySleepData } from "../scripts/getWeeklySleepData";

const WeeklyHoursOfSleepChart = () => {
  const [chartSleepData, setChartSleepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklySleepData = await getWeeklySleepData(currUser);
        setChartSleepData(weeklySleepData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BarChart width={450} height={300} data={chartSleepData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="duration" fill="#0389ad" />
      </BarChart>
    </>
  );
};

export default WeeklyHoursOfSleepChart;
