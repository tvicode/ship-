var ship, shipmove;
var edges;
var sea;
var seaimage;



function preload(){
  shipmove=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimage= loadImage("sea.png")
}

function setup(){
    createCanvas(800,400);

    sea = createSprite(400,200,800,400);
    sea.addImage(seaimage)
    ship=createSprite(400,330,10,10);
    ship.addAnimation("moving",shipmove)
    ship.scale = 0.2
    edges = createEdgeSprites();


}
function draw() {
  background("blue");

sea.velocityX = +2
if(sea.x>800){
sea.x = 400
}
  drawSprites();
}