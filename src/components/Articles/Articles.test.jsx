import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Articles from './Articles';

Enzyme.configure({ adapter: new Adapter() });
describe('<Home />', () => {
  test('it match the snapshot be', () => {
    const tree = renderer.create(<Articles />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
