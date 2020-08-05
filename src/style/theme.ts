import modularScale from "./modularScale";

/**
 * Scale stuff
 */

const scale = modularScale({ scale: 1.3, stepsDown: 2, length: 15 });
const _msVar = (num: number) => `var(--ms${num})`;

const _sizes = scale.map((item) => `${item}rem`);

export const sizeVars = _sizes
  .map((item, i) => {
    return `--ms${i - 2}:${item};`;
  })
  .join("\n");

/**
 * Theme
 */

export const colors = {
  black: "black",
  white: "white",
  grey: "grey",
};

export const size = {
  xs: ".25rem",
  sm: ".5rem",
  "-2": _msVar(-2),
  "-1": _msVar(-1),
  "0": _msVar(0),
  "1": _msVar(1),
  "2": _msVar(2),
  "3": _msVar(3),
  "4": _msVar(4),
  "5": _msVar(5),
  "6": _msVar(6),
  "7": _msVar(7),
  "8": _msVar(8),
  "9": _msVar(9),
  "10": _msVar(10),
  "11": _msVar(11),
  "12": _msVar(12),
  "13": _msVar(13),
  "14": _msVar(14),
  "15": _msVar(15),
};

const SIZE = 7;

export const fontSizes = {
  xs: `${SIZE / 4}vw`,
  sm: `${SIZE / 2}vw`,
  lg: `${SIZE}vw`,
};
