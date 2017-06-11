function Ball() {
    this.x = width / 2;
    this.y = 5;
    this.y_speed = 10;
    this.gravity = 0.98;
    
    this.show = function () {
        stroke(0);
        background(0);
        fill(255, 255, 0);
        ellipse(this.x, this.y, 35, 35);
    }

    this.update = function () {
        
        this.y_speed += this.gravity;
        this.y += this.y_speed;       

        if ( this.y < 0 || this.y > height) {                        
            this.y_speed *= -1;
        }
    }
}