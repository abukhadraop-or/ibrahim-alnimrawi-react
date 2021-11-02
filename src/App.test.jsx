import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from 'App';
import Enzyme, { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should be defined', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
