(async () => {
  const Planet = require("./models/planet");
  /*
  const newPlanet = await Planet.create({
    name: "Venus",
    position: 5,
  });
*/

  const seePlanets = await Planet.findAll({
    where: {
      name: "Venus",
    },
  });

  console.log(seePlanets);
})();
