var stars = [];
var n = 1200;

function setup() {
  createCanvas(800, 600);
  // createCanvas(screen.width,screen.height);

  for (var index = 0; index < this.n; index++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  stars.forEach(function (star) {
    star.update();
    star.show();
  });
}