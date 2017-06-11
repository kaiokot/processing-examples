var ball;

function setup() {
  createCanvas(800, 600);
  background(0);
  translate(width / 2, height);
  ball = new Ball();
}

function draw() {
  ball.show();
  ball.update();
}