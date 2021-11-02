import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { getArticles } from 'services/fake-articles-service';
import Pagination from '../shared/Pagination/Pagination';
import Articles from './Articles';
import { ArticleContainer, NotFound } from './articles.style';

jest.mock('services/fake-articles-service');

Enzyme.configure({ adapter: new Adapter() });

describe('<Articles />', () => {
  it('should be `No Articles are here...yet`', async () => {
    getArticles.mockResolvedValue({ articles: [] });

    const wrapper = mount(<Articles tag="" />);

    await act(async () => Promise.resolve());

    wrapper.update();

    expect(wrapper.find(NotFound).text()).toEqual(
      `No articles are here... yet.`
    );
  });

  it('should have one article', async () => {
    getArticles.mockResolvedValue({
      articles: [
        {
          slug: 'how-to-train-your-dragon-1',
          title:
            'How to train your dragon How to train your dragon How to train your dragon',
          description:
            'Ever wonder how? wfhdghkv whbdskvwdd hgkdvd  vkdwhsgvdhsvhds dughdsuoug w8dug8ud gds8u 8u8go8ods8u dsus8gvu sd',
          body: 'It takes a Jacobian',
          tagList: ['reactjs', 'dragons', 'training'],
          createdAt: '2016-02-18T03:22:56.637Z',
          updatedAt: '2016-02-18T03:48:35.824Z',
          favorited: false,
          favoritesCount: 25,
          author: {
            username: 'jake',
            bio: 'I work at statefarm',
            image: 'https://i.stack.imgur.com/xHWG8.jpg',
            following: false,
          },
        },
      ],
      articlesCount: 1,
    });

    const wrapper = mount(<Articles tag="" />);

    await act(async () => Promise.resolve());

    wrapper.update();

    expect(wrapper.find(ArticleContainer).length).toBe(1);
  });

  it('should calls onPageChange function once', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Articles />);

    wrapper.find(Pagination).props().onPageChange(onChange);

    expect(onChange).toBeCalledTimes(1);
  });
});
