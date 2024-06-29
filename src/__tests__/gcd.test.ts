import { gcd } from '../gcd';

test('GCD of 48 and 18 is 6', () => {
    expect(gcd(48, 18)).toBe(6);
});

test('GCD of 101 and 103 is 1', () => {
    expect(gcd(101, 103)).toBe(1);
});

test('GCD of 56 and 98 is 14', () => {
    expect(gcd(56, 98)).toBe(14);
});

test('GCD of 0 and 5 is 5', () => {
    expect(gcd(0, 5)).toBe(5);
});

test('GCD of 5 and 0 is 5', () => {
    expect(gcd(5, 0)).toBe(5);
});
