import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
    <div style={{ margin: 0 }}>
      <BarChart width={500} height={300} data={chartSleepData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default WeeklyHoursOfSleepChart;
