// function preload() {
//     img = loadImage('green.png');
//     }

class Player {
    constructor (img) {
        this.img = img
        this.x = width/2
        this.y = 2*(height/3)

        this.carWidth = this.img.width
        this.carHeight = this.img.height
    }
    display (){
        push();
        image(this.img, this.x, this.y, this.carWidth, this.carHeight)
        pop();
    }

      moveLeft() {
        if (this.x > 200) {
          this.x-=5;
        }
      }
    
      moveRight() {
        if (this.x < 630) {
          this.x+=5;
        }
      }

      moveForward() {
        if (this.y > 200) {
          this.y-=5;
        }
      }
    
      moveBack() {
        if (this.y < 630) {
          this.y+=5;
        }
      }
    
}