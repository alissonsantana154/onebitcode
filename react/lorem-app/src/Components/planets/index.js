import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [Planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const removeLast = () => {
    let new_planets = [...Planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLastPlanet = () => {
    let last_planet = Planets[Planets.length - 1];
    setPlanets([...Planets, last_planet]);
  };

  return (
    <Fragment>
      <h3>Planet List</h3>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLastPlanet}> Duplicate Last</button>
      <hr />
      {Planets.map((planet, index) => (
        <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          key={index}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
