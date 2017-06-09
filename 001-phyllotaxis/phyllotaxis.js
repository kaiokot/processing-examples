var n = 0;
var c = 4;

function setup() {
  //createCanvas(screen.width,screen.height);
  createCanvas(800,600);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height /2;
  fill(n % 256,255,255);
  noStroke();
  ellipse(x,y,4,4);
  n++;
}