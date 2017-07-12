var x;
var y;
var angle;
var r = 180;
var interval;

function setup() {
  createCanvas(600, 600);
  interval = round(random(2, 10));
  angle = radians(360);
}

function draw() {
  line(0, height / 2, width, height / 2)
  line(height / 2, 0, height / 2, width)
  text("x: " + round(x), 10, 20);
  text("y: " + round(y), 10, 40);
  text("angle: " + round(angle), 10, 60);

  translate(width / 2, height / 2);



  if (frameCount % interval == 0) {
    background(255, 150, 50);
    x = r * cos(radians(angle));
    y = r * sin(radians(angle));
    ellipse(x, y, 10, 10);
    angle -= 1;

    if (angle <= 0) {
      angle = 360.0;
    }
  }
}