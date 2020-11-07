var harryAnimation, basiliskAnimation;
var harry, basilisk;
function preload(){
  harryAnimation = loadAnimation("images/harry0.png","images/harry1.png" );
  basiliskAnimation = loadAnimation("images/basilisk00.png","images/basilisk01.png",
  "images/basilisk02.png","images/basilisk03.png","images/basilisk04.png",
  "images/basilisk05.png","images/basilisk06.png","images/basilisk07.png",
  "images/basilisk08.png","images/basilisk09.png","images/basilisk10.png",
  "images/basilisk11.png","images/basilisk12.png", "images/basilisk13.png");

}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  basilisk = createSprite(displayWidth/2,displayHeight/2);
  basilisk.scale = 3;
  harry = createSprite(400,400);
  
  if (basiliskAnimation)
    basiliskAnimation.frameDelay = 10;
  basilisk.addAnimation("slither", basiliskAnimation);
  
  if (harryAnimation)
    harryAnimation.frameDelay = 10;

  
  harry.addAnimation("harryRun", harryAnimation);
  

}


function draw(){
  background(200);
 
  drawSprites();

}
