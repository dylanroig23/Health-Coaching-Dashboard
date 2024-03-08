import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  LineChart,
} from "recharts";
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
      <LineChart width={450} height={300} data={zonevsSleepData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="sleep" orientation="left" stroke="#0389ad" />
        <YAxis yAxisId="zone" orientation="right" stroke="#f7bd52" />
        <Tooltip />
        <Line
          yAxisId="sleep"
          type="monotone"
          dataKey="sleep"
          stroke="#0389ad"
          strokeWidth={5}
          dot={{ strokeWidth: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="zone"
          type="monotone"
          dataKey="zone"
          stroke="#f7bd52"
          strokeWidth={5}
          dot={{ strokeWidth: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

export default WeeklyZonevsSleepChart;
