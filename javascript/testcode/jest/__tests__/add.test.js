import { add } from '../add';

test('add 1 + 2', () => {
  expect(add(1, 2)).toBe(3);
});

describe('add', () => {
  test('1 + 2 toBe 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('2 + 2 not toBe 5', () => {
    expect(add(2, 2)).not.toBe(5);
  });

  test('0.2 + 0.1 toBe 0.3', () => {
    expect(add(0.2, 0.1)).toBe(0.3); // 失敗：JSでは0.2 + 0.1 は 0.30000000000000004だから
  });

  test('0.2 + 0.1 toBeCloseTo 0.3', () => {
    expect(add(0.2, 0.1)).toBeCloseTo(0.3); // 成功：小数点数を近似的な等価性で評価する
  });
});