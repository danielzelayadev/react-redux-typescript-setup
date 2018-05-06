import * as utils from '../common';

describe('Common Utils', () => {
  describe('getPropCurried', () => {
    it('should return a curried R.prop function', () => {
      const getX = utils.getPropCurried('x');
      const expected = 10;
      const actual = getX({ x: expected });

      expect(actual).toBe(expected);
    });
  });
  describe('noop', () => {
    it('should do nothing', () => {
      expect({ noop: utils.noop.toString() }).toMatchSnapshot();
    });
  });
});
