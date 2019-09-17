import { Color } from './Color';


export function InterpolateFloat(start, end, stepsCount, stepNumber) {
	var s = start;
	const e = end;
	const final = s + (((e - s) / stepsCount) * stepNumber);
	return final;
}

export function InterpolateInt(start, end, stepsCount, stepNumber) {
	const floatInterpolated = InterpolateFloat(start, end, stepsCount, stepNumber);
	return Math.floor(floatInterpolated);
}

export function getColorFromRange(val) {
	const red = new Color(255, 0, 0);
	const middle = new Color(255, 255, 0);
	const green = new Color(0, 128, 0);
	let start = red;
	let end = middle;

	if (val > 50) {
	    start = middle;
        end = green;
	    val = val % 51;
	}

	const startColors = start.getColors();
	const endColors = end.getColors();

	var r = InterpolateInt(startColors.r, endColors.r, 50, val);
	var g = InterpolateInt(startColors.g, endColors.g, 50, val);
	var b = InterpolateInt(startColors.b, endColors.b, 50, val);

	return "rgb(" + r + "," + g + "," + b + ")";
}