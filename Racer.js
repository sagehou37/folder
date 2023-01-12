// function preload() {
//     racerImg = loadImage('lightblue.png');
//     }


class Racer {
    constructor(racerImg){
        this.racerImg = racerImg;

        
        //this.yDir = -1;

        this.carWidth = this.racerImg.width
        this.carHeight = this.racerImg.height

        this.x = random(300, 500);
        this.y = random(0-this.carHeight, windowHeight/2);
        this.xDir = random([-1, 1]);
    }

    display (){
        //car
        push();
        image(this.racerImg, this.x, this.y, this.carWidth, this.carHeight);
        pop();
    }

    checkCollision() {
        const pos = {x1: this.x, y1: this.y, x2: this.x + this.carWidth, y2: this.y + this.carHeight };
        const posPlayer = {x1: player.x, y1: player.y, x2: player.x+ this.carWidth, y2: player.y+ this.carHeight};
        if (overlaps(pos, posPlayer)) {
            // they have colllided 
            // respond

            gameOver = true;
        }
    }

    move() {
        this.y+=2 ;
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
    }
}

// // Check if rectangle a contains rectangle b
// // Each object (a and b) should have 2 properties to represent the
// // top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function contains(a, b) {
	return !(
		b.x1 < a.x1 ||
		b.y1 < a.y1 ||
		b.x2 > a.x2 ||
		b.y2 > a.y2
	);
}

// // Check if rectangle a overlaps rectangle b
// // Each object (a and b) should have 2 properties to represent the
// // top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function overlaps(a, b) {
	// no horizontal overlap
	if (a.x1 >= b.x2 || b.x1 >= a.x2) return false;

	// no vertical overlap
	if (a.y1 >= b.y2 || b.y1 >= a.y2) return false;

	return true;
}