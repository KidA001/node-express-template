// eslint-disable-next-line import/prefer-default-export
export const divide = (dividend: number, divisor: number): number => {
  if (divisor === 0) throw new Error('Cannot divide by zero!');
  return dividend / divisor;
};
