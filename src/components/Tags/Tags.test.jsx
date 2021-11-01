import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { getTags } from 'services/fake-tags';
import { NotFound } from '../Articles/articles.style';
import Tags from './Tags';

jest.mock('services/fake-tags.js', () => ({
  getTags: jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('should match the snapshot be', () => {
    const tree = renderer.create(<Tags />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be `No tags are here...yet`', () => {
    const result = { tags: ['reactjs'] };
    getTags.mockResolvedValueOnce(result);
    act(() => {
      const wrapper = mount(<Tags />);
      const notFound = wrapper.find(NotFound);
    });
  });
});
