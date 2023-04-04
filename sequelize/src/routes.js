const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");

// Rotas de planets
routes.post("/planets", PlanetController.Store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

module.exports = routes;
