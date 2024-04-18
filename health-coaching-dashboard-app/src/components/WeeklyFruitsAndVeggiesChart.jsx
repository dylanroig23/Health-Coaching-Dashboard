/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/6/2024

    Displays the week's metrics of fruit and veggies data. 
*/

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const formattedFruitsAndVeggiesData = [
  {
    day: "Sun.",
    fruits: 2,
    veggies: 3,
  },
  {
    day: "Mon.",
    fruits: 3,
    veggies: 3,
  },
  {
    day: "Tues.",
    fruits: 1,
    veggies: 2,
  },
  {
    day: "Wed.",
    fruits: 4,
    veggies: 2,
  },
  {
    day: "Thurs.",
    fruits: 0.5,
    veggies: 0,
  },
  {
    day: "Fri.",
    fruits: 1,
    veggies: 0.5,
  },
  {
    day: "Sat.",
    fruits: 3,
    veggies: 2,
  },
];

const WeeklyFruitsAndVeggiesChart = () => {
  return (
    <>
      <BarChart
        width={450}
        height={300}
        data={formattedFruitsAndVeggiesData}
        margin={0}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="fruits" fill="#f2e750" />
        <Bar dataKey="veggies" fill="#d795f0" />
      </BarChart>
    </>
  );
};

export default WeeklyFruitsAndVeggiesChart;
