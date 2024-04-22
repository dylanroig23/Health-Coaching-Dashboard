import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getWeeklySleepData } from "../scripts/getWeeklySleepData";

const WeeklyHoursOfSleepChart = () => {
  const [chartSleepData, setChartSleepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weeklySleepData = await getWeeklySleepData();
        setChartSleepData(weeklySleepData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={450} height={300} data={chartSleepData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="duration" fill="#0389ad" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default WeeklyHoursOfSleepChart;
