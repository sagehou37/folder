let player;

let racers = []
let carImages = [];

let pCarImage;
let gameOver = false;

function preload() {
  carImages[0] = loadImage("pink.png");
  carImages[1] = loadImage("green.png");
  carImages[2] = loadImage("lightblue.png");
  carImages[3] = loadImage("red.png");

  pCarImage = loadImage("teal.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  player = new Player(pCarImage)

  for (let i = 0; i < carImages.length; i++) {


    if (random() < 0.3) {
      racers.push(new CoolRacer(carImages[i]))
    }
    else {
      racers.push(new Racer(carImages[i]))
    }

  }
}

function draw() {

  background(220);
  fill(170);

  racetrack();
  scoreDisplay();

  for (const racer of racers) {
    racer.display();
    racer.move();
    racer.checkCollision();
  }

  player.display();
  playerMovement();

  if (gameOver == true) {
    displayGameOver()
  }
 
}

function playerMovement(){
  if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
  }


  if (keyIsDown(LEFT_ARROW)) {
    player.moveLeft();
  }

  if (keyIsDown(UP_ARROW)) {
    player.moveForward();
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.moveBack();
  }

}

function scoreDisplay() {
  let millisecond = millis();
  let second = round(millisecond);
  textSize(80)
  text(second, 800, 100);
}

function racetrack() {
  rect(200, 0, 500, windowHeight);
  fill("black");
}



function displayGameOver() {
  
  background("white")
  text("GAME OVER", windowWidth / 3, windowHeight / 2)
}