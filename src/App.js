import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
import AddJournal from "./components/AddJournal";
import TeamView from "./components/TeamView";

// import UserContextProvider from "./context/contextProvider";

function App() {
  return (
    <>
    
    <BrowserRouter>
    {/* <UserContextProvider> */}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/add-journal" element={<AddJournal />} />
        <Route path="/team" element={<TeamView />} />
      </Routes>
      {/* </UserContextProvider> */}
    </BrowserRouter>
    
 </> 
 );
}
export default App;
