import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import React from 'react';
import LikeButton from './LikeButton';

Enzyme.configure({ adapter: new Adapter() });
describe('<LikeButton />', () => {
  it('should be 10 ', () => {
    const wrapper = mount(<LikeButton count={10} />);
    expect(wrapper.props().count).toBe(10);
  });
});
