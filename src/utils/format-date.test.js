import { formatDate } from 'utils/format-date';

describe('format date function', () => {
  it('should be like Thu Feb 18 2016', () => {
    expect(formatDate('2016-02-18T03:22:56.637Z')).toBe('Thu Feb 18 2016');
  });
});
