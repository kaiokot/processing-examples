// https://en.wikipedia.org/wiki/Rose_(mathematics)
var k = 4;
var s = 200;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0)
}

function draw() {

  translate(width / 2, height / 2);
  beginShape();
  fill(255, 0, 0, 10);
  strokeWeight(1);
  for (var a = 0; a < TWO_PI; a += 0.02) {
    var r = s * cos(k * a) ;
    var x = r * cos(a);
    var y = r * sin(a);

    vertex(x, y);
  }
  endShape(CLOSE);
}