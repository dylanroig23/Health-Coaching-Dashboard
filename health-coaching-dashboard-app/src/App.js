import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeeklyDashboard from './pages/WeeklyDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeeklyDashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
