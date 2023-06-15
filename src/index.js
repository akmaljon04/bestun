import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./about";
import Rus from "./rus";
import AboutRus from "./aboutrus";
import Stilpage from "./stilpage";
import Stilpagerus from "./stilpagerus";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/rus" element={<Rus />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/aboutrus" element={<AboutRus />}></Route>
        <Route path="/stilpage" element={<Stilpage />}></Route>
        <Route path="/stilpagerus" element={<Stilpagerus />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
