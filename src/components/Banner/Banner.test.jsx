import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Banner from 'components/Banner/Banner';
import Enzyme from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('Banner component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Banner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
