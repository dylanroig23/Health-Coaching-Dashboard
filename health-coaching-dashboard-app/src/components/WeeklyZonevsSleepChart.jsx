import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import { getWeeklyZonevsSleepData } from "../scripts/getWeeklyZonevsSleepData";

const WeeklyZonevsSleepChart = () => {
  const [zonevsSleepData, setzonevsSleepData] = useState([]);

  const [maxYValueSleep, setMaxYValueSleep] = useState();
  const handleMaxYChangeSleep = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValueSleep(newValue);
  };

  const [maxYValueZone, setMaxYValueZone] = useState();
  const handleMaxYChangeZone = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValueZone(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weeklyZonevsSleepData = await getWeeklyZonevsSleepData();
        setzonevsSleepData(weeklyZonevsSleepData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (zonevsSleepData != null) {
    return (
      <>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={zonevsSleepData} margin={0}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis
              yAxisId="sleep"
              orientation="left"
              stroke="#0389ad"
              domain={[0, maxYValueSleep]}
            />
            <YAxis
              yAxisId="zone"
              orientation="right"
              stroke="#f7bd52"
              domain={[0, maxYValueZone]}
            />
            <Tooltip />
            <Line
              yAxisId="sleep"
              type="monotone"
              dataKey="sleep"
              stroke="#0389ad"
              strokeWidth={5}
              dot={{ strokeWidth: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="zone"
              type="monotone"
              dataKey="zone"
              stroke="#f7bd52"
              strokeWidth={5}
              dot={{ strokeWidth: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <label style={{ margin: "10px" }}>Max:</label>
            <input
              type="number"
              value={maxYValueSleep}
              onChange={handleMaxYChangeSleep}
              step={5}
              min={0}
              style={{ padding: "2px", width: "50px", marginBottom: "10px" }}
            />
          </div>
          <div>
            <label style={{ margin: "10px" }}>Max:</label>
            <input
              type="number"
              value={maxYValueZone}
              onChange={handleMaxYChangeZone}
              step={5}
              min={0}
              style={{ padding: "2px", width: "50px", margin: "0 40px 10px 0" }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Requested Week has Not Yet Occurred</h2>
      </>
    );
  }
};

export default WeeklyZonevsSleepChart;
