import { Spaceship } from "./export";
import * as _ from "lodash";

interface BattleSpaceschip extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceschip = {
  name: "X-wing",
  pilot: "Luke Skaywalker",
  speed: 50,
  weapons: 4,
};

console.log(_.camelCase(xwing.pilot));
