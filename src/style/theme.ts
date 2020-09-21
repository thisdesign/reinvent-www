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

export const fontFamilies = {
  sansSerif: "BasisGrotesque, Helvetica, Arial, sans-serif",
  display: "GTFlexa, Helvetica, Arial, sans-serif",
};

export const colors = {
  black: "#000",
  white: "white",
  blue: "#6BBDF3",

  /** Almost black */
  charcoal: "#353535",

  /** Standard text */
  grey: "grey",

  /** Almost White */
  ltGrey: "#F7F7F7",
};

export const ease = {
  standard: `cubic-bezier(.39,.575,.565,1)`,
};

const _scale = {
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

export const size = {
  ..._scale,
  xs: ".25rem",
  sm: ".5rem",
  navHeight: "3rem",
  maxWidth: "1400px",
  standard: `var(--size-standard)`,
  standardY: `calc(var(--size-standard) * 1.72)`,
};

export const zIndex = {
  nav: 50,
  modalShadow: 60,
  modalWindow: 70,
};

const DLY = 100;
const DUR = 600;

export const buildDelays = Array.from({ length: 10 })
  .map((_, i) => DLY + i * DLY)
  .map((t) => `${t}ms`);

export const tr = (properties: string[], buildIndex: number) =>
  properties
    .map(
      (property) =>
        `${DUR}ms ${property} ${ease.standard} ${buildDelays[buildIndex]}`
    )
    .join(", ");
