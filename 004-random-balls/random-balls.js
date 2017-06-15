function setup() {
  createCanvas(800, 600);
  background(0);
  frameRate(10);  
}

function draw() {

  var x = random(width);
  var y = random(height);

  var rS = random(5, 50);

  var r = random(255);
  var g = random(100);
  var b = random(80);

  noStroke();
  fill(r, g, b, 80);

  ellipse(x, y, rS, rS);

}