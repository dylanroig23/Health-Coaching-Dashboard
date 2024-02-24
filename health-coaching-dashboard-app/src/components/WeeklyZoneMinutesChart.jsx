import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyZoneMinutesData } from "../scripts/getWeeklyZoneMinutesData";

const WeeklyZoneMinutesChart = () => {
  const [chartZoneData, setChartZoneData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklyZoneMinutesData = await getWeeklyZoneMinutesData(currUser);
        setChartZoneData(weeklyZoneMinutesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BarChart width={450} height={300} data={chartZoneData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="duration" fill="#f7bd52" />
      </BarChart>
    </>
  );
};

export default WeeklyZoneMinutesChart;
