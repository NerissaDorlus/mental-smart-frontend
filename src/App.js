import "./styles/app.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddJournal from "./components/AddJournal";
import TeamView from "./components/TeamView";
import Landing from "./components/Landing";
import UserContextProvider from "./context/ContextProvider";
import { Container } from "@mui/system";

function App() {
  return (
    // <Container>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/add-journal" element={<AddJournal />} />
            <Route path="/team" element={<TeamView />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    // </Container>
  );
}
export default App;
