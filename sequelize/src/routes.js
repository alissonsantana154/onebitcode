const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");
const SateliteController = require("../Controller/SatelitesController");

// Rotas de planets
routes.post("/planets", PlanetController.Store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

module.exports = routes;
