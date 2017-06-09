function Ball() {
    this.x = 50;
    this.y = 50;
    this.speed = 0;
    this.gravity = 0.1;
    
    this.show = function () {
        stroke(0);
        background(0);
        fill(255, 255, 0);
        ellipse(this.x, this.y, 20, 20);
    }

    this.update = function () {
        this.y += this.speed;
        this.speed += this.gravity;

        if (this.y > height) {
            this.y = height;
            this.gravity *= -0.9;
        }
    }
}