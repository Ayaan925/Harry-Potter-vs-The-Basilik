var harryAnimation, basiliskAnimation;
var harry, basilisk, direction;
var arrowL, arrowR;
var arrowLImage,arrowRImage;
var counter;
var form;
function preload(){
  harryAnimation = loadAnimation("images/harry0.png","images/harry1.png" );
  basiliskAnimation = loadAnimation("images/basilisk00.png","images/basilisk01.png",
  "images/basilisk02.png","images/basilisk03.png","images/basilisk04.png",
  "images/basilisk05.png","images/basilisk06.png","images/basilisk07.png",
  /*"images/basilisk08.png","images/basilisk09.png","images/basilisk10.png",
  "images/basilisk11.png","images/basilisk12.png", "images/basilisk13.png"*/
  );
 arrowLImage = loadImage("images/left.png");
  arrowRImage = loadImage("images/right.png");
}

function setup(){
  canvas = createCanvas(windowWidth-100, windowHeight-100);
  basilisk = createSprite(windowWidth/2,windowHeight/2);
  basilisk.scale = 3;
  harry = createSprite(800,600);
  direction =0;//O for left 1 for right
  
  //if (basiliskAnimation)
   // basiliskAnimation.frameDelay = 20;
  //basilisk.addAnimation("slither", basiliskAnimation);
  
  if (harryAnimation)
    harryAnimation.frameDelay = 10;

  
  harry.addAnimation("harryRun", harryAnimation);
  

arrowL = createSprite(windowWidth*1/5,windowHeight*2/3);

arrowR = createSprite(windowWidth*3/4,windowHeight*2/3);
arrowL.addImage("leftArrow",arrowLImage);
arrowR.addImage("rightArrow",arrowRImage);
arrowL.scale = 0.5
arrowR.scale = 0.5
arrowL.visible = false;
arrowR.visible = false;
counter = 60;
setInterval(() => {
  counter = counter-1;
},1000);

form = new Form();


}


function draw(){
  background(200);
  if(keyDown("left")){
    harry.x = harry.x -20;
  }
  if(keyDown("right")){
    harry.x = harry.x +20;
  }
  
 // direction for arrows
 if(frameCount %150 === 0){
  direction = Math.round(Math.random());
  console.log(direction);
  if(direction === 0){
      arrowL.visible = true;
      arrowR.visible = false;
  }else {
    arrowL.visible = false;
      arrowR.visible = true;

  } 
  
  
  
  
  
  
  setTimeout(()=>{
    arrowL.visible = false;
    arrowR.visible = false;
  //Move Basilik to the direction
      if(direction === 0){
        basilisk.x = basilisk.x + 400
   
        } else{
          basilisk.x = basilisk.x - 400
        }
      setTimeout(()=>{
        basilisk.x = windowWidth/2

      },1000);
  
    },2000);
  
}

textSize(36);
fill(0);
text(counter, windowWidth/2-40, windowHeight/10);

  drawSprites();

}
