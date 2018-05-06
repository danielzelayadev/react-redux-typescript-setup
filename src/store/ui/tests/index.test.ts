import uiReducer, { actions, getClicks, initialState } from '..';

describe('UI Reducer', () => {
  it('should return initial state when no action matches', () => {
    const actual = uiReducer(initialState, { type: '' });
    const expected = initialState;

    expect(actual).toEqual(expected);
  });
  it('should handle ADD_CLICK correctly', () => {
    const actual = uiReducer(initialState, { type: 'ADD_CLICK' });
    const expected = { ...initialState, clicks: 1 };

    expect(actual).toEqual(expected);
  });
  it('should handle RESET_CLICKS correctly', () => {
    const actual = uiReducer(
      { ...initialState, clicks: 20 },
      { type: 'RESET_CLICKS' }
    );
    const expected = { ...initialState, clicks: 0 };

    expect(actual).toEqual(expected);
  });
});

describe('UI Action Creators', () => {
  it('should create addClick correctly', () => {
    expect(actions.addClick()).toMatchSnapshot();
  });
  it('should create resetClicks correctly', () => {
    expect(actions.resetClicks()).toMatchSnapshot();
  });
});

describe('UI Action Selectors', () => {
  describe('getClicks', () => {
    it('should return correct click count', () => {
      const clicks = 100;
      const state = { ui: { clicks } };

      expect(getClicks(state)).toBe(clicks);
    });
  });
});
