// https://en.wikipedia.org/wiki/Katakana_(Unicode_block)

var columns = [];
var symbolSize = 20;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  textSize(this.symbolSize);

  var x = 0;
  for (var index = 0; index < width / symbolSize; index++) {
    column = new Column();
    column.generate(x, random(-width, 0));
    this.columns.push(column);
    x += symbolSize;
  }
}

function draw() {
  background(0);

  this.columns.forEach(function (column) {
    column.show();
  });
}



function Symbol(x, y, speed) {
  this.x = x;
  this.y = y;
  this.text;
  this.speed = speed;
  this.interval = round(random(2, 25));

  this.generate = function () {
    if (frameCount % this.interval == 0) {
      this.text = String.fromCharCode(0x30A0 + round(random(0, 96)))
    }
  }

  this.rain = function () {
    if (this.y >= height) {
      this.y = 0
    }
    else {
      this.y += this.speed;
    }
  }
}


function Column() {
  this.symbols = [];
  this.totalSymbols = int(random(5, 30));
  this.speed = int(random(5, 10));

  this.generate = function (x, y) {
    var x = x;
    var y = y;

    for (var i = 0; i < this.totalSymbols; i++) {
      symbol = new Symbol(x, y, this.speed);
      symbol.generate();
      this.symbols.push(symbol);
      y -= symbolSize;
    }
  }

  this.show = function () {
    this.symbols.forEach(function (item) {
      //      background(0);
      fill(0, 255, 70);
      text(item.text, item.x, item.y);
      item.rain();
      item.generate();
    });
  }
}