const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-02-03 16:57:01');

  expect(format_date(date)).toBe('2/3/2022');
});

test('format_plural() returns a plural word', () => {
  const word1 = format_plural('tiger', 1);
  const word2 = format_plural('cat', 2);

  expect(word1).toBe('tiger');
  expect(word2).toBe('cats');
});

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.cool.com/asdf/');
  const url3 = format_url('www.google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('cool.com');
  expect(url3).toBe('google.com');
});
