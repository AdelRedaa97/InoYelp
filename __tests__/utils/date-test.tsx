import {formatDate} from '../../src/utils/date';

test("Today's date should be formatted correctly", () => {
  const date = new Date();
  const expectedDate =
    String(date.getFullYear()) +
    '-' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getDate()).padStart(2, '0');

  expect(formatDate(date)).toBe(expectedDate);
});

test('A date in the future should be formatted correctly', () => {
  const date = '2023-12-31';
  const expectedDate = '2023-12-31';

  expect(formatDate(date)).toBe(expectedDate);
});

test('A date in the past should be formatted correctly', () => {
  const date = new Date('2000-01-01');
  const expectedDate = '2000-01-01';

  expect(formatDate(date)).toBe(expectedDate);
});
