/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const healthyMealsData = [
  {
    day: "Sun.",
    healthy: 3,
    semihealthy: 1,
    unhealthy: 0,
  },
  {
    day: "Mon.",
    healthy: 2,
    semihealthy: 1,
    unhealthy: 0,
  },
  {
    day: "Tues.",
    healthy: 1,
    semihealthy: 0,
    unhealthy: 2,
  },
  {
    day: "Wed.",
    healthy: 2,
    semihealthy: 0,
    unhealthy: 1,
  },
  {
    day: "Thurs.",
    healthy: 3,
    semihealthy: 1,
    unhealthy: 0,
  },
  {
    day: "Fri.",
    healthy: 2,
    semihealthy: 1,
    unhealthy: 1,
  },
  {
    day: "Sat.",
    healthy: 3,
    semihealthy: 1,
    unhealthy: 0,
  },
];

const WeeklyHealthyMealsChart = () => {

  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={healthyMealsData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" padding={{ left: 30, right: 30 }} />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="healthy"
            stroke="#3bf563"
            strokeWidth={5}
            dot={{ strokeWidth: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="semihealthy"
            stroke="#f2e750"
            strokeWidth={5}
            dot={{ strokeWidth: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="unhealthy"
            stroke="#ff0000"
            strokeWidth={5}
            dot={{ strokeWidth: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
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
    </>
  );
};

export default WeeklyHealthyMealsChart;
