var r = 0;
var t = 0;

function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  var x = r * cos(t * 6) + width / 2;
  var y = r * sin(t * 6) + height / 2;
  noStroke();
  ellipse(x, y, 5, 5);
  fill(r % 256, r % 256, r % 256);

  t += 0.01;
  r += 0.10;
}