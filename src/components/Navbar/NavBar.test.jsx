import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavBar from 'components/Navbar/Navbar';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { LinksContainer, MenuBar, MenuLink } from './navbar.style';

Enzyme.configure({ adapter: new Adapter() });
describe('<NavBar />', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('MenuBar should call onClick function once ', () => {
    const wrapper = mount(<NavBar />);
    const menuBar = wrapper.find(MenuBar);
    menuBar.simulate('click');
    expect(wrapper.find(LinksContainer).length).toBe(1);
    const menu = wrapper.find(MenuLink).first();
    menu.simulate('click');
    expect(wrapper.find(LinksContainer).length).toBe(0);
  });
});
