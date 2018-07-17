!function(t){var i={};function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(s,r,function(i){return t[i]}.bind(null,r));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=3)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(1),r=function(){function t(t,i){this.config={previous:t.dataset.previous||i.previous,current:t.dataset.current||i.current,title:t.dataset.title||i.title},this.startGradientAngle=Math.PI+Math.PI/8,this.endGradientAngle=Math.PI+Math.PI/2+Math.PI/20,this.startRedAngle=Math.PI-Math.PI/4,this.endRedAngle=this.startGradientAngle,this.startGreenAngle=this.endGradientAngle,this.endGreenAngle=2*Math.PI+Math.PI/4,this.gradientLength=Math.abs(100*(this.startGradientAngle-this.endGradientAngle)),this.canvas=t,this.size=this.canvas.width,this.canvas.width=this.size,this.canvas.height=this.size,this.ctx=t.getContext("2d"),this.indicatorRadius=this.size/3,this.indicatorLineWidth=this.indicatorRadius/2,this.ctx.translate(this.size/2,this.size/2),this.min=0,this.previous=parseFloat(this.config.previous),this.max=2*this.previous,this.current=parseFloat(this.config.current),this.indicatorTitle=this.config.title.split(" "),this.minPosY=Math.sin(this.startRedAngle)*this.indicatorRadius-this.size/15.8,this.maxPosY=Math.sin(this.endGreenAngle)*this.indicatorRadius-this.size/15.8}return t.prototype.getPercentDifference=function(){var t={},i=this.previous-this.current<0,e=Math.abs(this.previous-this.current),s=Math.round(e/(this.previous/100)*10)/10;return i?(t.text="⬆ "+s+"%",t.color="#008800"):(t.text="⬇ "+s+"%",t.color="#ff0000"),t},t.prototype.draw=function(){this.ctx.fillStyle="#ffffff",this.ctx.fillRect(-this.size,-this.size,2*this.size,2*this.size),this.drawBackground(),this.drawArrow(),this.drawMiddleText(),this.drawRangeText(),this.drawPercentArrows()},t.prototype.drawBackground=function(){this.ctx.lineWidth=this.indicatorLineWidth+4,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius,this.startRedAngle-this.size/75e3,this.endRedAngle),this.ctx.strokeStyle="#333",this.ctx.stroke(),this.ctx.lineWidth=this.indicatorLineWidth,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius,this.startRedAngle,this.endRedAngle),this.ctx.strokeStyle=s.getColorFromRange(0),this.ctx.stroke();for(var t=this.startGradientAngle,i=0;t<this.endGradientAngle;i+=.5,t+=this.endGradientAngle/1e3)this.ctx.lineWidth=this.indicatorLineWidth+4,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius,t,this.endGradientAngle),this.ctx.strokeStyle="#fff",this.ctx.stroke(),this.ctx.closePath(),this.ctx.lineWidth=this.indicatorLineWidth,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius,t-.01,this.endGradientAngle),this.ctx.strokeStyle=s.getColorFromRange(Math.round(i/this.gradientLength*100)),this.ctx.stroke(),this.ctx.closePath();this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius+this.indicatorLineWidth/2+1,this.startGradientAngle,this.endGradientAngle),this.ctx.strokeStyle="#333",this.ctx.stroke(),this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius-this.indicatorLineWidth/2-1,this.startGradientAngle,this.endGradientAngle),this.ctx.strokeStyle="#333",this.ctx.stroke(),this.ctx.lineWidth=this.indicatorLineWidth+4,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius,this.startGreenAngle,this.endGreenAngle+this.size/75e3),this.ctx.strokeStyle="#333",this.ctx.stroke(),this.ctx.lineWidth=this.indicatorLineWidth,this.ctx.beginPath(),this.ctx.arc(0,0,this.indicatorRadius,this.startGreenAngle-.03,this.endGreenAngle),this.ctx.strokeStyle=s.getColorFromRange(100),this.ctx.stroke()},t.prototype.getArrowAngle=function(){if(this.current>this.max)return-.25;if(this.current<0)return-1.75;var t=this.max-this.min,i=this.current-this.min;return 0===i?-1.75:i*(1.5/t)-1.75},t.prototype.drawArrow=function(){var t=this.getArrowAngle();this.ctx.save(),this.ctx.rotate(Math.PI*t),this.ctx.fillStyle="#333",this.ctx.beginPath(),this.ctx.moveTo(0,this.size/2-this.indicatorLineWidth/2),this.ctx.lineTo(this.indicatorLineWidth/9,this.size/2-this.size/4-this.size/100),this.ctx.lineTo(this.indicatorLineWidth/9*-1,this.size/2-this.size/4-this.size/100),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=1,this.ctx.strokeStyle="#000",this.ctx.stroke(),this.ctx.restore()},t.prototype.drawMiddleText=function(){this.ctx.restore(),this.ctx.textAlign="center";var t=this.size/7.5;this.ctx.font=t+"px Arial",this.ctx.fillStyle="#333",this.ctx.fillText(this.current,0,t/4),this.ctx.textAlign="center";var i=this.size/15;this.ctx.font=i+"px Arial";for(var e=0;e<this.indicatorTitle.length;e++)this.ctx.fillText(this.indicatorTitle[e],0,this.size/5.7+i*e+t/4)},t.prototype.drawRangeText=function(){this.ctx.textAlign="right",this.ctx.font=this.size/25+"px Arial Black",this.ctx.fillText(this.min,this.size/2.9*-1,this.minPosY+this.indicatorLineWidth/1.5),this.ctx.textAlign="left",this.ctx.font=this.size/25+"px Arial Black",this.ctx.fillText(this.max,this.size/2.9,this.maxPosY+this.indicatorLineWidth/1.5),this.ctx.textAlign="center",this.ctx.font=this.size/25+"px Arial Black";var t=(this.max-this.min)/2;this.ctx.fillText(t+this.min,0,this.size/2.22*-1)},t.prototype.drawPercentArrows=function(){if(this.ctx.textAlign="center",this.ctx.font=this.size/16+"px Arial Black",this.ctx.strokeStyle="#333",this.ctx.lineWidth=this.size/400,this.max/2>this.current){var t=this.getPercentDifference();this.ctx.fillStyle=t.color,this.ctx.fillText(t.text,0,0-this.size/10)}else t=this.getPercentDifference(),this.ctx.fillStyle=t.color,this.ctx.fillText(t.text,0,0-this.size/10)},t}();i.default=r},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(2);function r(t,i,e,s){var r=t+(i-t)/e*s;return Math.floor(r)}i.Interpolate=r,i.getColorFromRange=function(t){var i=new s.Color(255,0,0),e=new s.Color(255,255,0),n=new s.Color(0,128,0),h=i,o=e;t>50&&(h=e,o=n,t%=51);var c=h.getColors(),a=o.getColors();return"rgb("+r(c.r,a.r,50,t)+","+r(c.g,a.g,50,t)+","+r(c.b,a.b,50,t)+")"}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,i,e){this.r=t,this.g=i,this.b=e}return t.prototype.setColors=function(t,i,e){this.r=t,this.g=i,this.b=e},t.prototype.getColors=function(){return{r:this.r,g:this.g,b:this.b}},t}();i.Color=s},function(t,i,e){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(i,"__esModule",{value:!0});var r=s(e(0));i.default=r.default}]);