import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from './SignUp';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignUp />', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
