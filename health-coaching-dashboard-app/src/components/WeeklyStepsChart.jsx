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
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyStepsData } from "../scripts/getWeeklyStepsData";

/* Creates a graphic that displays the week's steps. */

const WeeklyStepsChart = () => {
  const [chartStepsData, setChartStepsData] = useState([]);

  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

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
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartStepsData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Bar dataKey="steps" fill="#3bf563" />
        </BarChart>
      </ResponsiveContainer>
      <label style={{ margin: "10px" }}>Max:</label>
      <input
        type="number"
        value={maxYValue}
        onChange={handleMaxYChange}
        step={500}
        min={0}
        style={{ padding: "2px", width: "65px", marginBottom: "10px" }}
      />
    </>
  );
};

export default WeeklyStepsChart;
