// import Indicator from './Indicator';

// (window as any).EshopsIndicator = Indicator;

// export default Indicator;

import { Gradient } from './Gradient';

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const g = new Gradient(ctx);
g.draw()