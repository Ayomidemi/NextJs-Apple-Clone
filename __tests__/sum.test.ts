import sum from '../helpers/sum';

describe('The sum function should work as expected', () => {
  it('should sum numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});