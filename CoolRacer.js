class CoolRacer extends Racer{
    constructor(racerImg){
        super(racerImg);
    }

    move() {
        this.y+=-2 ;
        this.x += this.xDir;
        if (this.x < 200) {
            this.xDir *= -1;
            this.x = 200;
        }

        if (this.x > 600) {
            this.xDir *= -1;
        }
        if (this.y >= windowHeight) {
            this.y = 0-this.carHeight;
        }

        if (this.y < 0) {
            this.y = windowHeight;
        }
    }
}