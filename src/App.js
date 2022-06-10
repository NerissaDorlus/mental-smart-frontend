import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
// import Footer from "./common/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddJournal from "./components/AddJournal";
import TeamView from "./components/TeamView";

function App() {
  return (
    <>
    <AddJournal/>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/journals" element={<AddJournal />} />
        <Route path="/journals" element={<TeamView />} />
      </Routes>
    </BrowserRouter>
 </> 
 );
}
export default App;
