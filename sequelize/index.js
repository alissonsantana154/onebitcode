(async () => {
  const Planet = require("./models/planet");
  /*
  const newPlanet = await Planet.create({
    name: "Marte",
    position: 2,
  });


  const seePlanets = await Planet.findAll({
    where: {

      name"venus",
    }
  });

  const updatePlanets = await Planet.findByPk(1);
  updatePlanets.name = "Terra";
  await updatePlanets.save();
*/

  const deletePlanets = await Planet.findByPk(3);

  console.log(deletePlanets);

  await deletePlanets.destroy();
})();
