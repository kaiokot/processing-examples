var ball;

function setup() {
  ball = new Ball();
  createCanvas(800, 600);
  background(0);
}

function draw() {
  ball.show();
  ball.update();
}