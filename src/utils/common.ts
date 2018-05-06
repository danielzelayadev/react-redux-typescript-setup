import * as R from 'ramda';

export const getPropCurried = R.curryN(2, R.prop);
export const noop = () => {
  return;
};
