import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import NotFound from "./pages/404";
import Estudiantes from "./pages/ESTUDIANTES/estudiantes";
import Login from "./pages/LOGIN/login";
import Profesores from "./pages/PROFESORES/profesores";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<App />}>
            <Route path="miacademia/estudiantes" element={<Estudiantes />} />
            <Route path="miacademia/profesores" element={<Profesores />} />
            <Route path="cursos" element={<Profesores />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
);
