import React, { Fragment, useState } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

// componentDidMount() {
//   getPlanets().then((data) => {
//     setState((state) => ({
//       Planets: data["planets"],
//     }));
//   });
// }

const Planets = () => {
  const [Planets, setPlanets] = useState([
    {
      id: "mars",
      name: "Mars",
      description:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      link: "https://en.wikipedia.org/wiki/Mars",
    },
  ]);

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
