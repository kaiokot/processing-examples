function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {

  background(0)

  var x_map = map(mouseX, 0, width, 0, 100);
  var y = height / 2;

  ellipse(x_map, y, 40, 40);

  textSize(20);
  text("width: " + width, 20, 20);
  text("mouseX: " + mouseX, 20, 40);
  text("mapped: " + x_map, 20, 60);
  fill(255);
}