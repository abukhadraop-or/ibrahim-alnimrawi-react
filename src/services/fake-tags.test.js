import { getTags } from './fake-tags';

describe('get tags function', () => {
  it('should be {[`reactjs`, `angularjs`]}', async () => {
    expect(await getTags()).toEqual({ tags: ['reactjs', 'angularjs'] });
  });
});
