const Planet = require("../models/planet");
const Satelite = require("../models/satelites");

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

module.exports = { Planet, Satelite };
