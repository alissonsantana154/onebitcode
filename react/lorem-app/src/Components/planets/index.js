import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Planets: [
        {
          name: "Mercúrio",
          description:
            "Mercúrio é um metal líquido à temperatura ambiente, conhecido desde os tempos da Grécia Antiga. Também é conhecido como hidrargírio,[1] hidrargiro,[1] azougue[2] e prata-viva, entre outras denominações. Seu nome homenageia o deus romano Mercúrio, que era o mensageiro dos deuses. Essa homenagem é devida à fluidez do metal. O símbolo Hg vem do grego latinizado 'hydrargyrum' que significa prata líquida.",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
        },
        {
          name: "Plutão",
          description:
            "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg",
        },
      ],
    };
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
        {this.state.Planets.map((planet) => (
          <Planet
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
