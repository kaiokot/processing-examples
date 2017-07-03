function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
    this.t = 0;

    this.history = [];

    this.show = function () {
        stroke(0);
        fill(255);

        ellipse(this.x, this.y, 20, 20);

        if (this.history.length >= 25) {
            this.history.splice(0, 1);
        }

        var count = 1;
        this.history.forEach(function (item) {
            fill(random(150), random(150),random(150));
            ellipse(item.x, item.y, count, count);
            count++;
        });
    }

    this.update = function () {
        this.x = this.r * cos(this.t * 20) + this.x;
        this.y = this.r * sin(this.t * 20) + this.y;

        var hist = createVector(this.x, this.y);
        this.history.push(hist);

        this.t += 0.01;
        this.r += 0.02;
    }
}