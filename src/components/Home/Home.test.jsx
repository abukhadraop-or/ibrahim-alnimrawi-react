import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('should be defined', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should be change', () => {
  //   jest.mock('components/Articles/Articles', () => () => {
  //     <div />;
  //   });
  //   jest.mock('components/Tags/Tags', () => () => {
  //     returned();
  //   });
  // const wrapper = mount(<Home />);
  // });
});
