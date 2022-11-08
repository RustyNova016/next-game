import { abilities } from "./abilities";
import { types } from "./types";

export const ourMob = [
  {
    id_model: 4,
    label: "Salameche",
    PV: { current: 99, max: 99 },
    attack: 60,
    defense: 55,
    speed: 70,
    lvl: 35,
    xp: { current: 1, max: 10000 },
    type: ["fire"],
    capacities: [abilities.griffe, abilities.flammeche],
    img: require("./../images/SALAMECHE.png"),
    type: [types.fire],
  },
  {
    id_model: 25,
    label: "Pikachu",
    PV: { current: 80, max: 80 },
    attack: 60,
    defense: 50,
    speed: 95,
    lvl: 30,
    xp: { current: 1, max: 10000 },
    type: ["electric"],
    capacities: [abilities.doublePied, abilities.eclair],
    img: require("./../images/PIKACHU.png"),
    type: [types.electric],
  },

  {
    id_model: 674,
    label: "Pandespiegle",
    PV: { current: 130, max: 130 },
    attack: 90,
    defense: 70,
    speed: 50,
    lvl: 40,
    xp: { current: 1, max: 10000 },
    type: ["water"],
    capacities: [abilities.charge, abilities.cogne],
    img: require("./../images/PANDESPIEGLE.png"),
    type: [types.fighting],
  },
];
