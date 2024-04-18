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
import AuthorizeUser from "./pages/AuthorizeUser";
import CallbackHandler from "./pages/CallbackHandler";
import Redcap from "./pages/Redcap";
import ContactInfo from "./pages/ContactInfo";
import SmartGoals from "./pages/SmartGoals";
import AddUser from "./pages/AddUser";

function App() {
  const CLIENT_ID = "23RWNL"; //this value comes from Fitbit (we will want to change this to an environment variable?)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeeklyDashboard CLIENT_ID={CLIENT_ID} />} />
        <Route path="/sunday" element={<Sunday CLIENT_ID={CLIENT_ID} />} />
        <Route path="/monday" element={<Monday CLIENT_ID={CLIENT_ID} />} />
        <Route path="/tuesday" element={<Tuesday CLIENT_ID={CLIENT_ID} />} />
        <Route
          path="/wednesday"
          element={<Wednesday CLIENT_ID={CLIENT_ID} />}
        />
        <Route path="/thursday" element={<Thursday CLIENT_ID={CLIENT_ID} />} />
        <Route path="/friday" element={<Friday CLIENT_ID={CLIENT_ID} />} />
        <Route path="/saturday" element={<Saturday CLIENT_ID={CLIENT_ID} />} />
        <Route path="/redcap" element={<Redcap CLIENT_ID={CLIENT_ID} />} />
        <Route path="/adduser" element={<AddUser CLIENT_ID={CLIENT_ID} />} />
        <Route
          path="/contact-info"
          element={<ContactInfo CLIENT_ID={CLIENT_ID} />}
        />
        <Route
          path="/smart-goals"
          element={<SmartGoals CLIENT_ID={CLIENT_ID} />}
        />
        <Route
          path="/authorize"
          element={<AuthorizeUser CLIENT_ID={CLIENT_ID} />}
        />
        <Route
          path="/callback"
          element={<CallbackHandler CLIENT_ID={CLIENT_ID} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
