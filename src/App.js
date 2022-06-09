import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import Hero from "./components/Hero";
import Journal from "./components/Journal";
// import Footer from "./common/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddJournal from "./components/AddJournal";

function App() {
  return (
    <>
    <AddJournal/>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/journals" element={<Journal />} />
      </Routes>
    </BrowserRouter>
 </> 
 );
}
export default App;
