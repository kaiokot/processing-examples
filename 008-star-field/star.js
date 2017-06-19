function Star() {
    this.init();
    this.speed = 10;
    this.pz = this.z;
}

Star.prototype.init = function () {
    this.x = random(-width, width);
    this.y = random(-height, width);
    this.z = random(width);
    this.pz = this.z;
}

Star.prototype.update = function () {

    this.z -= this.speed;

    if (this.z < 1) {
        this.init();
    }
}

Star.prototype.show = function () {

    noStroke();
    fill(255);

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);

    //ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
}

