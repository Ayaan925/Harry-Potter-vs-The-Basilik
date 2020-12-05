var harry, basilisk, direction;
var arrowL, arrowR;
var arrowLImage,arrowRImage;
var counter;
var form;
function preload(){
 arrowLImage = loadImage("images/left.png");
  arrowRImage = loadImage("images/right.png");
}

function setup(){
  canvas = createCanvas(windowWidth-10, windowHeight-10);
  basilisk = new Snake();
  harry = new Player();
 
  direction =0;//O for left 1 for right

  

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
  background(00);
 // direction for arrows
 if(frameCount %150 === 0){
  direction = Math.round(Math.random());
  console.log(direction);
  if(direction === 0){
      arrowL.visible = true;
      arrowR.visible = false;
     // basilisk.sprite.changeAnimation("slither-right");
  }else {
      arrowL.visible = false;
      arrowR.visible = true;
    //  basilisk.sprite.changeAnimation("slither-left");

  } 
  
  
  setTimeout(()=>{
    arrowL.visible = false;
    arrowR.visible = false;
    basilisk.sprite.scale = 1.7;
    basilisk.sprite.changeAnimation("strike-right");

  //Move Basilik to the direction
      if(direction === 0){
        /**Move right */
        basilisk.sprite.x = basilisk.sprite.x + 200;
   
        } else{
          /**Move left */
          basilisk.sprite.x = basilisk.sprite.x - 200;
        }
      setTimeout(()=>{
        basilisk.sprite.x = windowWidth/2;
        basilisk.sprite.changeAnimation("slither-right");
        basilisk.sprite.scale = 2;

      },1000);
  
    },2000);
  
}

textSize(36);
fill(0);
text(counter, windowWidth/2-40, windowHeight/10);
harry.display(); 
basilisk.display();
  drawSprites();

 }
