export class Color {
	constructor(
		private r,
		private g,
		private b,
	) {}

	setColors(_r, _g, _b) {
		this.r = _r;
		this.g = _g;
		this.b = _b;
	}

	getColors() {
		return {
			r: this.r,
			g: this.g,
			b: this.b,
		};
	}
}