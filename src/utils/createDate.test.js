import createDate from './createDate';

test('should be modified correctly', () => {
  const timeJSON = "2021-03-13T15:41:14"
  expect(createDate(timeJSON)).toBe('13 March 2021, 15:41:14');
});