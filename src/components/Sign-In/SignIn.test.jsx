import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './SignIn';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignIn />', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<SignIn />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
