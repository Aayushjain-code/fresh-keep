import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./Context/auth-context";
import { NotesProvider } from "./Context/note-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
