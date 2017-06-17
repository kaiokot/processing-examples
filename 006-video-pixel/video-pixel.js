var video;

var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(0);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var pixelIndex = (video.width - x + 1 + (y * video.width)) * 4; // mirror
      // var pixelIndex = (x + y * video.width)*4;
      
      var r = video.pixels[pixelIndex];
      var g = video.pixels[pixelIndex + 1];
      var b = video.pixels[pixelIndex + 2];

      var grayScale = (r + g + b) / 3;

      var w = map(grayScale, 0, 255, 0, vScale);

      noStroke();
      fill(255);
      ellipseMode(CENTER);
      ellipse(x * vScale, y * vScale, w, w);
    }
  }

}