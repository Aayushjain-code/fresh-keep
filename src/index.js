import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./Context/authContext";
import { NoteProvider } from "./Context/noteContext";
import { ArchiveProvider } from "./Context/archiveContext";
import { TrashProvider } from "./Context/trashContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TrashProvider>
        <NoteProvider>
          <ArchiveProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ArchiveProvider>
        </NoteProvider>
      </TrashProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
