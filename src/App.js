import "./App.css";
import { Routes, Route, Location, useLocation } from "react-router-dom";


import LandingPage from "./Pages/LandingPage/LandingPage";
import NotesPage from "./Pages/NotesPage/NotesPage";
import LabelPage from "./Pages/LabelPage/LabelPage";
import ArchivePage from "./Pages/ArchivePage/ArchivePage";
import Login from "./Pages/AuthPages/Login";
import Signup from "./Pages/AuthPages/Signup";
import TrashPage from "./Pages/TrashPage/TrashPage"

import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

import Mockman from "mockman-js";
import { RequireAuth } from "./Components/ReqResAuth/RequireAuth";
import { RestrictAuth } from "./Components/ReqResAuth/RestrictAuth";

function App() {

  const location = useLocation();


  return (
    <div className="App">
      {location.pathname === "/notes" ||
        location.pathname === "/archived" ||
        location.pathname === "/labels" ||
        location.pathname === "/trashed" ? (
        <Navbar />
      ) : null}

      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/mockman" element={<Mockman />} /> */}
        <Route path="/" element={<LandingPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/labels" element={<LabelPage />} />
          <Route path="/archived" element={<ArchivePage />} />
          <Route path="/trashed" element={<TrashPage />} />
        </Route>

        <Route element={<RestrictAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
