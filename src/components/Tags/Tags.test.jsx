import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tags from 'components/Tags/Tags';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { getTags } from 'services/fake-tags';
import { NotFound, Tag } from './tags.style';

jest.mock('services/fake-tags.js');

Enzyme.configure({ adapter: new Adapter() });

describe('<Tags />', () => {
  it('should be `No tags are here...yet`', async () => {
    getTags.mockResolvedValue({ tags: [] });

    const wrapper = mount(<Tags onTagChange={jest.fn()} selectedTag="" />);

    await act(async () => Promise.resolve());

    wrapper.update();

    expect(wrapper.find(NotFound).text()).toEqual(` No tags are here...yet`);
  });

  it('should call Tag onClick ', async () => {
    const onTagChange = jest.fn();

    getTags.mockResolvedValue({ tags: ['reactjs'] });

    const wrapper = mount(<Tags onTagChange={onTagChange} selectedTag="" />);

    await act(async () => Promise.resolve());

    wrapper.update();

    wrapper.find(Tag).simulate('click');

    expect(onTagChange).toBeCalledTimes(1);
  });
});
