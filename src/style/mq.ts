import { SIZES } from "../constants";

export type Size = keyof typeof SIZES;

export type Sizes = {
  [item in Size]: number;
};

export type MediaQuery = {
  [item in Size]: string;
};

const mq = Object.keys(SIZES).reduce(
  (acc, current) => ({
    ...acc,
    [current as Size]: `(min-width: ${Reflect.get(SIZES, current)}px)`,
  }),
  {}
) as MediaQuery;

export default mq;
