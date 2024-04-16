/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formattedFruitsData = [
  {
    day: "Sun.",
    fruits: 2,
  },
  {
    day: "Mon.",
    fruits: 3,
  },
  {
    day: "Tues.",
    fruits: 1,
  },
  {
    day: "Wed.",
    fruits: 4,
  },
  {
    day: "Thurs.",
    fruits: 0.5,
  },
  {
    day: "Fri.",
    fruits: 1,
  },
  {
    day: "Sat.",
    fruits: 3,
  },
];

const WeeklyServingsOfFruitsChart = () => {

  const [averageYValue, setAverageYValue] = useState();
  
  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

  useEffect(() => {
    const totalFruitServings = formattedFruitsData.reduce((sum, dataPoint) => sum + dataPoint.fruits, 0);
    const averageFruitServings = totalFruitServings / formattedFruitsData.length;
    setAverageYValue(averageFruitServings);
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedFruitsData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Bar dataKey="fruits" fill="#f2e750" />
          <ReferenceLine 
            y={averageYValue} 
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
        step={1}
        min={0}
        style={{ padding: '2px', width: '50px', marginBottom: '10px' }}
      />
      <label style={{ marginRight: '20px', color: "#666666", float: "right" }}>
          <span style={{ color: "#F16060", fontWeight: "bold" }}>Avg: </span>
          {Math.round(averageYValue * 100) / 100}
      </label>
    </>
  );
};

export default WeeklyServingsOfFruitsChart;
