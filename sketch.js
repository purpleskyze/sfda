var seaImage
var ship_moving

function preload(){
 seaImg = loadImage("sea.png");
 ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,180,10,30);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  sea.velocityX = -1;
  
  ship = createSprite(100,320,20,4);
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

  drawSprites();

  //code to reset background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}