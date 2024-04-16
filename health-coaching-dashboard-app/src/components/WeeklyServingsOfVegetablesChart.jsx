/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formattedVeggiesData = [
  {
    day: "Sun.",
    veggies: 3,
  },
  {
    day: "Mon.",
    veggies: 3,
  },
  {
    day: "Tues.",
    veggies: 2,
  },
  {
    day: "Wed.",
    veggies: 2,
  },
  {
    day: "Thurs.",
    veggies: 0,
  },
  {
    day: "Fri.",
    veggies: 0.5,
  },
  {
    day: "Sat.",
    veggies: 2,
  },
];

const WeeklyServingsOfVegetablesChart = () => {

  const [averageYValue, setAverageYValue] = useState();
  
  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

  useEffect(() => {
    const totalVeggieServings = formattedVeggiesData.reduce((sum, dataPoint) => sum + dataPoint.veggies, 0);
    const averageVeggieServings = totalVeggieServings / formattedVeggiesData.length;
    setAverageYValue(averageVeggieServings);
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedVeggiesData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Bar dataKey="veggies" fill="#965dc2" />
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
      <label style={{ marginRight: "20px", color: "#666666", float: "right" }}>
          <span style={{ color: "#F16060", fontWeight: "bold" }}>Avg: </span>
          {Math.round(averageYValue * 100) / 100}
      </label>
    </>
  );
};

export default WeeklyServingsOfVegetablesChart;
