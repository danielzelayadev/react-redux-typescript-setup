import { shallow } from 'enzyme';
import * as R from 'ramda';
import * as React from 'react';
import { mapDispatchToProps, mapStateToProps, UI as Index } from '..';

describe('Index Page UI', () => {
  it('should render correctly', () => {
    expect(
      shallow(<Index appClicks={0} addClick={R.always(0)} />)
    ).toMatchSnapshot();
  });
});

describe('Index Page Container', () => {
  it('should map state to props correctly', () => {
    expect(mapStateToProps({ ui: { clicks: 10 } })).toMatchSnapshot();
  });
  it('should map dispatch to props correctly', () => {
    expect(mapDispatchToProps).toMatchSnapshot();
  });
});
