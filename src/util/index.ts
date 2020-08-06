export const inc = (index: number, length: number) => (index + 1) % length;
export const dec = (index: number, length: number) =>
  index === 0 ? length - 1 : index - 1;
