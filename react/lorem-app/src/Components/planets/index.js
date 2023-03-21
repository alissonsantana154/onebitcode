import React, { Fragment } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
  console.log(`um click no planeta: ${name}`);
};

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <button>show message!</button>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é um dos quatro planetas telúricos do Sistema Solar e seu corpo é rochoso como a Terra. É o menor planeta do sistema solar, com um raio equatorial de 2 439,7 km."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        title_with_underline={true}
        gray={true}
      />

      <Planet
        name="Plutão"
        description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg"
      />
    </Fragment>
  );
};

export default Planets;
