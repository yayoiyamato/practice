import { add } from '../mylib';

test('add 1 + 2', () => {
  expect(add(1, 2)).toBe(3);
});

describe('add', () => {
  test('1 + 2', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('2 + 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  test('-1 + 2', () => {
    expect(add(-1, 2)).toBe(1);
  });
});