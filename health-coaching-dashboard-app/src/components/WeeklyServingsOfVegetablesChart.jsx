/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

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
  return (
    <>
      <BarChart width={450} height={300} data={formattedVeggiesData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="veggies" fill="#965dc2" />
      </BarChart>
    </>
  );
};

export default WeeklyServingsOfVegetablesChart;
