import { shallow } from 'enzyme';
import * as React from 'react';
import NotFound from '..';

describe('NotFound Page', () => {
  it('should render correctly', () => {
    expect(shallow(<NotFound />)).toMatchSnapshot();
  });
});
