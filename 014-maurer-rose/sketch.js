//  Reference
//  https://en.wikipedia.org/wiki/Maurer_rose
//  https://pdfs.semanticscholar.org/3a4c/7ce5d236723a50511512a9c3ec5f96dd23b3.pdf
var previousVector;
var n;
var d;
var k = 120;
var interval;
var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(0)
  interval = 120;
}

function draw() {
  if (frameCount % interval == 0) {
    background(0)

    n = int(random(1, 359));
    d = int(random(1, 359));

    fill(255);

    text("Random Maurer Rose", height / 2, 20);

    text("n:" + n, 10, 30);
    text("d:" + d, 10, 40);

    text("algorithm A:", 150, 50);
    text("algorithm B:", 400, 50);

    maurerRoseAlgA(n, d, 400, 350);

    maurerRoseAlgB(n, d, 900, 350);
  }

}

function maurerRoseAlgA(n, d, xxx, yyy) {

  var theta = 0;

  previousVector = createVector(xxx / 2, yyy / 2);

  do {
    theta += d;

    if (theta >= 360) {
      theta = theta % 360;
    }

    var aux = theta % 360;
    var x = n * aux;
    var r = k * sin(radians(x));
    var t = radians(theta);

    // translating polar to rectangular coordinates
    x = r * cos(t) + xxx / 2;
    y = r * sin(t) + yyy / 2;

    var newVector = createVector(x, y);

    strokeWeight(0.25);
    stroke(random(255), random(255), random(255));
    line(previousVector.x, previousVector.y, newVector.x, newVector.y);
    previousVector = createVector(newVector.x, newVector.y);
  } while (theta != 0);
}


function maurerRoseAlgB(n, d, xxx, yyy) {

  var theta = 0;
  var T = 0;
  var c = 0;

  previousVector = createVector();

  var fixLines = true;

  while (true) {

    if (fixLines) {
      theta = T;
      var a = (TWO_PI * theta) / 360;
      var rr = n * sin(radians(a));

      var xx = rr * cos(radians(theta)) + xxx / 2;
      var yy = rr * sin(radians(theta)) + yyy / 2;

      previousVector = createVector(xx, yy);
    }

    theta += d;

    if (theta >= 360) {
      theta = theta % 360;
    }

    var aux = theta % 360;
    var x = n * aux;
    var r = k * sin(radians(x));

    var t = radians(theta);

    // translating polar to rectangular coordinates
    x = r * cos(t) + xxx / 2;
    y = r * sin(t) + yyy / 2;

    var newVector = createVector(x, y);

    strokeWeight(0.25);
    stroke(random(255), random(255), random(255));
    line(previousVector.x, previousVector.y, newVector.x, newVector.y);
    c++;

    if (theta == T) {
      if (c >= 360) {
        break;
      }
      else {
        T++;
        fixLines = true;
      }
    }
    else {
      previousVector = createVector(newVector.x, newVector.y);
      fixLines = false;
    }
  }
}

window.onresize = function () {
  console.log('onresize');
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w, h);
  width = w;
  height = h;
};

