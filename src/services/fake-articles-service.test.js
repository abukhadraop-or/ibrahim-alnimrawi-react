import { getArticles, paginate } from './fake-articles-service';

describe('fake articles service', () => {
  describe('paginate function', () => {
    it('should be', () => {
      const data = [
        {
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
          articlesCount: 23,
        },
      ];
      const pageNumber = 1;
      const pageSize = 10;
      const expected = {
        articles: [
          {
            author: {
              bio: 'I work at statefarm',
              following: false,
              image: 'https://i.stack.imgur.com/xHWG8.jpg',
              username: 'jake',
            },
            body: 'It takes a Jacobian',
            createdAt: '2016-02-18T03:22:56.637Z',
            description:
              'Ever wonder how? wfhdghkv whbdskvwdd hgkdvd  vkdwhsgvdhsvhds dughdsuoug w8dug8ud gds8u 8u8go8ods8u dsus8gvu sd',
            favorited: false,
            favoritesCount: 25,
            slug: 'how-to-train-your-dragon-1',
            tagList: ['reactjs', 'dragons', 'training'],
            title:
              'How to train your dragon How to train your dragon How to train your dragon',
            updatedAt: '2016-02-18T03:48:35.824Z',
          },
        ],
        articlesCount: 23,
      };
      expect(paginate(data, pageNumber, pageSize)).toEqual(expected);
    });
  });

  describe('get articles function', () => {
    it('should be 23 article', async () => {
      const tag = '';
      const pageNumber = 1;
      const pageSize = 10;
      const result = await getArticles(tag, pageNumber, pageSize);
      const count = result.articlesCount;
      expect(count).toBe(23);
    });

    it('should be zero', async () => {
      const tag = 'fake';
      const pageNumber = 1;
      const pageSize = 10;
      const result = await getArticles(tag, pageNumber, pageSize);
      const count = result.articlesCount;
      expect(count).toBe(0);
    });
  });
});
