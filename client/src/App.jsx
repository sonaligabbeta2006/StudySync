import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./Compontents/Auth/RequireAuth.jsx";
import Contact from "./Pages/Contact.jsx";
import CourseList from "./Pages/Course/CourseList.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import billGates from "./Assets/Images/billGate.png";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/courses" element={<CourseList />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
