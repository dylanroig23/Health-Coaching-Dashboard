import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyStepsData } from "../scripts/getWeeklyStepsData";

const WeeklyStepsChart = () => {
  const [chartStepsData, setChartStepsData] = useState([]);

  const [averageYValue, setAverageYValue] = useState();
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

        const totalSteps = weeklyStepsData.reduce((sum, dataPoint) => sum + dataPoint.steps, 0);
        const averageSteps = totalSteps / weeklyStepsData.length;
        setAverageYValue(averageSteps);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartStepsData} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Bar dataKey="steps" fill="#3bf563" />
          <ReferenceLine 
            y={averageYValue} 
            label={{ value: 'Avg: ' + Math.floor(averageYValue), position: 'right'}}
            strokeWidth={2} 
            stroke="red" 
            strokeDasharray="3 3" 
          />
        </BarChart>
      </ResponsiveContainer>
      <label style={{ margin: '10px'}} >Max:</label>
      <input
        type="number"
        value={maxYValue}
        onChange={handleMaxYChange}
        step={500}
        min={0}
        style={{ padding: '2px', width: '65px', marginBottom: '10px' }}
      />
      <label style={{ marginRight: '20px', color: "#666666", float: "right" }}>
          <span style={{ color: 'red' }}>Avg: </span>
          {Math.floor(averageYValue)}
      </label>
    </>
  );
};

export default WeeklyStepsChart;
