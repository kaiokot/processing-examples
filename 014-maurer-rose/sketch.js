//  Reference
//  https://en.wikipedia.org/wiki/Maurer_rose
//  https://pdfs.semanticscholar.org/3a4c/7ce5d236723a50511512a9c3ec5f96dd23b3.pdf
var previousVector;
var n;
var d;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0)

  n = int(random(1, 359));
  d = int(random(1, 359));
  fill(255);
  text("refresh to new Maurer Rose", height / 2, 20);
  text("n:" + n, 10, 30);
  text("d:" + d, 10, 40);

  maurerRose(n, d);
}


function maurerRose(n, d) {
  translate(width / 2, height / 2);

  var theta = 0;

  previousVector = createVector();

  do {
    theta = theta + d;

    if (theta >= 360)
      theta = theta % 360;

    var aux = theta % 360;
    var x = (n * aux);
    var r = 100 * sin(x);


    // translating polar to rectangular coordinates
    x = r * cos(theta);
    y = r * sin(theta);

    var newVector = createVector(x, y);

    strokeWeight(0.25);
    stroke(random(255), random(255), random(255));
    line(previousVector.x, previousVector.y, newVector.x, newVector.y);

    previousVector = createVector(newVector.x, newVector.y);

  } while (theta != 0);
}

function draw() {

}