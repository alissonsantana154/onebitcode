import React, { Fragment } from "react";
import "./style.css";

const Planet = () => {
  return (
    <Fragment>
      <h4>Mercúrio</h4>
      <p>
        Mercúrio é um dos quatro planetas telúricos do Sistema Solar e seu corpo
        é rochoso como a Terra. É o menor planeta do sistema solar, com um raio
        equatorial de 2 439,7 km.
      </p>
      <img
        class="gray-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
      ></img>
    </Fragment>
  );
};

export default Planet;
