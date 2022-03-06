

let xspacing = 5; 
let w; 
let theta = 20.0; 
let amplitude = 120.0;
let period = 600;
let dx; 
let yvalues; 

function setup() {
  var canvas = createCanvas(500, 300);
 
  
  canvas.position(700, 300)
 
  w = width + 20;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {

  //clear();
    background(140);
  calcWave();
  renderWave();
}

function calcWave() {
  
  theta += 0.10;
  
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}