import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import DatabaseContextProvider from "./Context/Databasecontext";
import CarritoContextProvider from "./Context/CarritoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DatabaseContextProvider>
      <AuthContextProvider>
        <CarritoContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </CarritoContextProvider>
      </AuthContextProvider>
    </DatabaseContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
