const numerals = [4096, 256, 16];
const factors = [...Array(15).keys()].map(f => f + 1);

export default (number) => {
  if (number >= 4096 * 16) {
    return null;
  }

  const [digits, remainder] = numerals.reduce(
    ([ds, rem], numeral) => {
      const fits = factors.reduce(
        (prev, factor) => (rem - factor * numeral >= 0 ? factor : prev),
        0,
      );
      return [
        [...ds, ...(fits > 1 ? [fits] : []), ...(fits > 0 ? [numeral] : [])],
        rem - fits * numeral,
      ];
    },
    [[], number],
  );

  return [...digits, ...(remainder > 0 ? [remainder] : [])];
};
