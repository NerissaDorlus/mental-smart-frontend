import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddJournal from "./components/AddJournal";
import TeamView from "./components/TeamView";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-journal" element={<AddJournal />} />
        <Route path="/team" element={<TeamView />} />
      </Routes>
    </BrowserRouter>
 </> 
 );
}
export default App;
