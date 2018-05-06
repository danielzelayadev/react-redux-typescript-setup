import { shallow } from 'enzyme';
import * as React from 'react';
import CenterBox from '..';

describe('CenterBox Component', () => {
  it('should render correctly', () => {
    expect(shallow(<CenterBox />)).toMatchSnapshot();
  });
  it('should render correctly with all props', () => {
    expect(shallow(<CenterBox background="blue" />)).toMatchSnapshot();
  });
});
