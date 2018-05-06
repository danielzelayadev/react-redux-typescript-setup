import { shallow } from 'enzyme';
import * as React from 'react';
import ErrorLayout from '..';

describe('ErrorLayout', () => {
  it('should render correctly', () => {
    expect(
      shallow(<ErrorLayout message="Whoops! Something went wrong X_X" />)
    ).toMatchSnapshot();
  });
});
