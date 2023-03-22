import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import Planet from "./Components/planets/planet";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={PlanetsScreen} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
