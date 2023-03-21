import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        Planets: data["planets"],
      }));
    });
  }

  removeLast = () => {
    let new_planets = [...this.state.Planets];
    new_planets.pop();
    this.setState((state) => ({
      Planets: new_planets,
    }));
  };

  duplicateLastPlanet = () => {
    let last_planet = this.state.Planets[this.state.Planets.length - 1];
    this.setState((state) => ({
      Planets: [...this.state.Planets, last_planet],
    }));
  };

  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLastPlanet}> Duplicate Last</button>
        <hr />
        {this.state.Planets.map((planet, index) => (
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
  }
}

export default Planets;
