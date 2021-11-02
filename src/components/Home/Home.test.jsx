import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tags from 'components/Tags/Tags';
import Enzyme, { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('should be defined', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toBeDefined();
  });

  it('should calls onTagChange function once', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Home />);

    wrapper.find(Tags).props().onTagChange(onChange);

    expect(onChange).toBeCalledTimes(1);
  });
});
