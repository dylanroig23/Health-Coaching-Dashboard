import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeeklyDashboard from "./pages/WeeklyDashboard";
import Sunday from "./pages/Sunday";
import Monday from "./pages/Monday";
import Tuesday from "./pages/Tuesday";
import Wednesday from "./pages/Wednesday";
import Thursday from "./pages/Thursday";
import Friday from "./pages/Friday";
import Saturday from "./pages/Saturday";
import Redcap from "./pages/Redcap";
import ContactInfo from "./pages/ContactInfo";
import SmartGoals from "./pages/SmartGoals";
import AddUser from "./pages/AddUser";
import CalendarView from "./pages/CalendarView";
import UserList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeeklyDashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/sunday" element={<Sunday />} />
        <Route path="/monday" element={<Monday />} />
        <Route path="/tuesday" element={<Tuesday />} />
        <Route path="/wednesday" element={<Wednesday />} />
        <Route path="/thursday" element={<Thursday />} />
        <Route path="/friday" element={<Friday />} />
        <Route path="/saturday" element={<Saturday />} />
        <Route path="/redcap" element={<Redcap />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/contact-info" element={<ContactInfo />} />
        <Route path="/smart-goals" element={<SmartGoals />} />
        <Route path="/calendar-view" element={<CalendarView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
