var particles = []


function setup() {
  createCanvas(screen.width, screen.height);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(0);
  fill(255)

  text("click to add.", 10, 20);

  particles.forEach(function (particle) {
    particle.update();
    particle.show();
  });

}
