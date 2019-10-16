import { InterpolateInt, InterpolateFloat, getColorFromRange } from './addons';


test('InterpolateInt', () => {
	expect(InterpolateInt(0, 10, 10, 5)).toBe(5);
});

test('InterpolateFloat', () => {
	expect(InterpolateFloat(0, 5, 10, 5)).toBe(2.5);
});

test('getColorFromRange', () => {
	expect(getColorFromRange(0)).toBe('rgb(255,0,0)');
	expect(getColorFromRange(50)).toBe('rgb(255,254,0)');
	expect(getColorFromRange(100)).toBe('rgb(5,130,0)');
});

