import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyStepsData } from "../scripts/getWeeklyStepsData";

const WeeklyStepsChart = () => {
  const [chartStepsData, setChartStepsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklyStepsData = await getWeeklyStepsData(currUser);
        setChartStepsData(weeklyStepsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BarChart width={450} height={300} data={chartStepsData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="steps" fill="#3bf563" />
      </BarChart>
    </>
  );
};

export default WeeklyStepsChart;
