import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyZoneMinutesData } from "../scripts/getWeeklyZoneMinutesData";

const WeeklyZoneMinutesChart = () => {
  const [chartZoneData, setChartZoneData] = useState([]);

  const [maxYValue, setMaxYValue] = useState();
  const handleMaxYChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxYValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currUser = await getCurrentUser();
        const weeklyZoneMinutesData = await getWeeklyZoneMinutesData(currUser);
        setChartZoneData(weeklyZoneMinutesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartZoneData} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, maxYValue]} />
          <Tooltip />
          <Bar dataKey="duration" fill="#f7bd52" />
        </BarChart>
      </ResponsiveContainer>
      <label style={{ margin: '10px'}} >Max:</label>
      <input
        type="number"
        value={maxYValue}
        onChange={handleMaxYChange}
        step={5}
        min={0}
        style={{ padding: '2px', width: '50px', marginBottom: '10px' }}
      />
    </>
  );
};

export default WeeklyZoneMinutesChart;
