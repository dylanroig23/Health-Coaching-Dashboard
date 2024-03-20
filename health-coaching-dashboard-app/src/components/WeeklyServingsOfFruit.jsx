/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React from "react";
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
  return (
    <>
      <BarChart width={450} height={300} data={formattedFruitsData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="fruits" fill="#f2e750" />
      </BarChart>
    </>
  );
};

export default WeeklyServingsOfFruitsChart;