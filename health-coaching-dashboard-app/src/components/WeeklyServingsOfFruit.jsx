/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

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

  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

  return (
    <>
      <BarChart width={450} height={300} data={formattedFruitsData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[0, maxYValue]} />
        <Tooltip />
        <Bar dataKey="fruits" fill="#f2e750" />
      </BarChart>
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

export default WeeklyServingsOfFruitsChart;
