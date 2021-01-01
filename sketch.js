var tom,tom_running,tom_collided
var jerry,jerry_teasing,jerry_collided
var garden,gardenImage

function preload() {
    tom_running=loadAnimation("tomTwo.png","tomThree.png");
    tom_collided=loadAnimation("tomFour.png");
    tom=loadAnimation("tomOne.png");

    gardenImage=loadImage("garden.png",garden);

    jerry_teasing=loadAnimation("jerryTwo.png","jerryThree.png");
    jerry_collided=loadAnimation("jerryFour.png");
    jerry=loadAnimation("jerryOne.png");
    
}


function setup() {
  createCanvas(1200,800);
  
garden= createSprite(100,200);
garden.addImage("garden",gardenImage);

 jerry= createSprite(100, 400, 80, 80);
  jerry.addAnimation("jerryOne.png");

 jerry.scale=0.1;
 
 tom= createSprite(400,400,80,80);
  tom.addAnimation("tomOne.png");
 tom.scale=0.2;

}

function draw() {
  background(0,0,0); 
  
  jerry.depth=tom.depth;

if(tom.x - jerry.x < tom.width/2 - jerry.width/2
  && jerry.x - tom.x < tom.width/2 - jerry.width/2){
  
  text(mouseX + ',' + mouseY,10,45);
  
  tom.addAnimation("collided",tom_collided);
    tom.changeAnimation("collided");
  tom.velocityX=0;
  
   jerry.addAnimation("collide",jerry_collided);
    jerry.changeAnimation("collide");
    
}
  
  keyPressed();
  drawSprites();
  
  
  
  text("PRESS RIGHTKEY TO TEASE TOM",200,200);
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX=-5;
      tom.addAnimation("running",tom_running);
        tom.changeAnimation("running");
      jerry.addAnimation("teasing",jerry_teasing);
      jerry.changeAnimation("teasing");
    }
}
