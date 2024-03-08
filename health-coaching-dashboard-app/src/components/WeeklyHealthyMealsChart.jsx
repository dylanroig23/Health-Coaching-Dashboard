/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
  return (
    <>
      <LineChart width={450} height={300} data={healthyMealsData} margin={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" padding={{ left: 30, right: 30 }} />
        <YAxis domain={[0, 4]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="healthy"
          stroke="#3bf563"
          strokeWidth={3}
          dot={{ strokeWidth: 4 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="semihealthy"
          stroke="#f2e750"
          strokeWidth={3}
          dot={{ strokeWidth: 4 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="unhealthy"
          stroke="#ff0000"
          strokeWidth={3}
          dot={{ strokeWidth: 4 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

export default WeeklyHealthyMealsChart;
