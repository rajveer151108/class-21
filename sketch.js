var movingRect,fixedRect



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,100,50,80)
  fixedRect.shapeColor="green"
  movingRect=createSprite(400,800,80,30)
  movingRect.shapeColor="green"
  movingRect.velocityY=-5;
  fixedRect.velocityY=+5
}

function draw() {
  background(255,255,255);  

  bouncing(movingRect,fixedRect);
  drawSprites();
}

