import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyZonevsSleepData } from "../scripts/getWeeklyZonevsSleepData";

const WeeklyZonevsSleepChart = () => {
  const [zonevsSleepData, setzonevsSleepData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklyZonevsSleepData = await getWeeklyZonevsSleepData(currUser);
        setzonevsSleepData(weeklyZonevsSleepData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BarChart width={450} height={300} data={zonevsSleepData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sleep" fill="#0389ad" />
        <Bar dataKey="zone" fill="#f7bd52" />
      </BarChart>
    </>
  );
};

export default WeeklyZonevsSleepChart;
