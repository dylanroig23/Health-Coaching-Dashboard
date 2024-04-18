/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024

    Displays graphics for week's servings of vegetables. Data is hardcoded
*/

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedVeggiesData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Bar dataKey="veggies" fill="#965dc2" />
        </BarChart>
      </ResponsiveContainer>
      <label style={{ margin: "10px" }}>Max:</label>
      <input
        type="number"
        value={maxYValue}
        onChange={handleMaxYChange}
        step={1}
        min={0}
        style={{ padding: "2px", width: "50px", marginBottom: "10px" }}
      />
    </>
  );
};

export default WeeklyServingsOfVegetablesChart;
