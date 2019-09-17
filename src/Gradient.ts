var deg1 = Math.PI / 180;
var PI = Math.PI;

function DEG(degree: number) {
	return deg1 * degree;
}

function hexToRgb(hex: string): any {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? [ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ] : null;
}

function interpolate(startValue: number, endValue: number, stepNumber: number, lastStepNumber: number) {
    return (endValue - startValue) * stepNumber / lastStepNumber + startValue;
}

function interpolateRGB(rgbFrom, rgbTo, stepNumber, lastStepNumber) {
	return [
		interpolate(rgbFrom[0], rgbTo[0], stepNumber, lastStepNumber),
		interpolate(rgbFrom[1], rgbTo[1], stepNumber, lastStepNumber),
		interpolate(rgbFrom[2], rgbTo[2], stepNumber, lastStepNumber),
	];
}

class Point {
	constructor(
		public x: number,
		public y: number,
	) {}

	applyAngle(angle, distance) {
		const newX = this.x + (Math.cos(angle) * distance);
		const newY = this.y + (Math.sin(angle) * distance);
		return new Point(newX, newY);
	}

	draw(ctx, radius) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, radius, 0, PI * 2);
		ctx.fill();
	}
}

class Gradient {
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;

	color1: string;
	color2: string;

	radius: number;

	degrees: number;
	rotate: number;
	pieces: number;
	glowwidth: number;
	glowintensity: number;

	constructor(ctx) {
		this.ctx = ctx;
		this.width = 300; // width of canvas
		this.height = 300; // height of canvas
		// this.color1 = "#2255ff"; // start color
		// this.color2 = "#ff2255"; // end color
		this.color1 = "#ff0000"; // start color
		this.color2 = "#ffff00"; // end color
		this.radius = this.width / 2 - 40; // outer circle radius
		this.degrees = 284; // degrees the arc covers
		this.rotate = -90; // rotate the whole thing
		this.pieces = 30; // number of slices
		this.glowwidth = 0; // glow width
		this.glowintensity = 0.2; // glow width

	}

	drawSegment(startAngle, endAngle, color1, color2, parts) {
		const ctx = this.ctx;
		endAngle = -360 + endAngle;
		const partSize = (360 - startAngle + endAngle) / parts;
		// const x = this.width / 2;
		// const y = this.height / 2;
		const x = 0;
		const y = 0;
		ctx.lineWidth = 40;
		ctx.strokeStyle = '#000';
		ctx.beginPath();
		ctx.arc(x, y, this.radius, DEG(startAngle), DEG(endAngle), false);
		ctx.stroke();

		const p = new Point(x, y);
		p.draw(ctx, 10);

		
		ctx.lineWidth = 20;

		const cf = color1
		const ct = color2
		// const POG = partSize / 10;
		const POG = 0.1;

		for (let i = 1; i < parts + 1; i++) {
			ctx.beginPath();
			const pStart = p.applyAngle(DEG(startAngle + (i-1) * partSize), this.radius);
			const pEnd = p.applyAngle(DEG(startAngle + i * partSize), this.radius);
			ctx.arc(x, y, this.radius, DEG(startAngle + (i - 1) * partSize - POG), DEG(startAngle + (i) * partSize + POG));

			const grad = ctx.createLinearGradient(pStart.x, pStart.y, pEnd.x, pEnd.y);
			const cStart = interpolateRGB(cf, ct, i-1, parts);
			const cEnd = interpolateRGB(cf, ct, i, parts);
			grad.addColorStop(0, `rgb(${cStart[0]},${cStart[1]},${cStart[2]})`);
			grad.addColorStop(1, `rgb(${cEnd[0]},${cEnd[1]},${cEnd[2]})`);
			ctx.strokeStyle = grad;

			ctx.stroke();
		}
	}

	draw() {
		const ctx = this.ctx;

		ctx.canvas.width = this.width;
		ctx.canvas.height = this.height;


		// var color1 = hexToRgb(this.color1);
		// var color2 = hexToRgb(this.color2);
		var color1 = hexToRgb('#ff0000');
		var color2 = hexToRgb('#ffff00');
		var color3 = hexToRgb('#008800');

		const segments = 30;
		const startAngle = 50;
		const endAngle = 310;

		const diff = endAngle - startAngle;
		const segment = diff / segments;

		ctx.save();
		ctx.translate(this.width / 2, this.height / 2);
		ctx.rotate(DEG(90));

		this.drawSegment(50, 120, color1, color2, 10);
		this.drawSegment(120, 240, color2, color3, 10);
		this.drawSegment(240, 310, color3, color3, 10);

		ctx.restore();
	}
}


export { Gradient };
