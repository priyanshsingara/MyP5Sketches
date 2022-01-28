let p;
let cluster = [];

function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
  //noStroke();

  for (let i = 0; i < 100; i++) {
    p = new Particle();
    cluster.push(p);
  }
}

function draw() {
  //background (220);
  p.display();
  p.update();
  for (let i = 0; i < cluster.length; i++) {
    cluster[i].display();
    cluster[i].update();
  }
}

class Particle {
  constructor() {
    this.posX = random(width);//position can be randomin the whole width
    this.posY = random(height);//position can be random in the whole height
    this.velX = random(-1, 10);//velocity of x between -1 and +10
    this.velY = random(-1, 50);//velocity of y between -1 and +50
    this.rad = random(5,10);//size of the balls 
    this.c = random(0, 255);
    print(this.velX, this.velY);// print the values to check the code
  }

  display() {
    fill(this.c, 100, 100);
    ellipse(this.posX, this.posY, this.rad, this.rad);
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    this.bounce();
  }

  bounce() { // to bounce the balls off the wall.
    if (this.posX > width) { // if position is more than width  then reverse it, all have the same logic just for different wallks.
      
      this.velX = -this.velX;
    }
    if (this.posY > height) {
      this.velY = -this.velY;
    }

    if (this.posX < 0) {
      this.velX = -this.velX;
    }
    if (this.posY < 0) {
      this.velY = -this.velY;
    }
  }
}
