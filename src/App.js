import "./App.css";
import { Routes, Route } from "react-router-dom";


import LandingPage from "./Pages/LandingPage/LandingPage";
import NotesPage from "./Pages/NotesPage/NotesPage";
import LabelPage from "./Pages/LabelPage/LabelPage";
import ArchivePage from "./Pages/ArchivePage/ArchivePage";
import Login from "./Pages/AuthPages/Login";
import Signup from "./Pages/AuthPages/Signup";

import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/labels" element={<LabelPage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
