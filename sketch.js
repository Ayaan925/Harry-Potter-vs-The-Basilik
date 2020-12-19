const factor = window.innerWidth*window.innerHeight / (1920*1080);
var harry, basilisk, direction;
var arrowL, arrowR;
var arrowLImage,arrowRImage;
var counter;
var form;
var bg;

var leftWall, rightWall;
var gameState = "play";
function preload(){
 arrowLImage = loadImage("images/left.png");
  arrowRImage = loadImage("images/right.png");
  bg = loadImage("images/background.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth-10, windowHeight-10);
  basilisk = new Snake();
  harry = new Player();
  leftWall = createSprite(windowWidth/10,windowHeight*9/10, 10, windowHeight/2);
  rightWall = createSprite(windowWidth*9/10,windowHeight*9/10, 10, windowHeight/2);
  direction =0;//O for left 1 for right
  leftWall.visible = false;
  rightWall.visible = false;
console.log(factor);
  

arrowL = createSprite(windowWidth*1/6,windowHeight*2/3);
arrowR = createSprite(windowWidth*7/8,windowHeight*2/3);
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
window.addEventListener("resize", () => {window.location.reload()});


}


 function draw(){
  background(bg);
  if(gameState === "end"){
    end();
  } else{
    play();
  }

 // direction for arrows

  

harry.display(); 
basilisk.display();
  drawSprites();

 }

 function checkStrike(){
  if(harry.sprite.isTouching(basilisk.sprite)){
    //decrease Harry Health Bar
    form.decreaseHealthBar();
    console.log("checkStrike");
  }

 }
 function play(){
  textSize(36);
  fill(0);
  text(counter, windowWidth/2-40, windowHeight/13);
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
      gameState = "strike";
      arrowL.visible = false;
    
      arrowR.visible = false;
      basilisk.sprite.scale = 1.7*factor;
      basilisk.sprite.changeAnimation("strike-right");

    //Move Basilik to the direction
        if(direction === 0){
          /**Move right */
          basilisk.sprite.x = basilisk.sprite.x + 200;
    
          } else{
            /**Move left */
            basilisk.sprite.x = basilisk.sprite.x - 200;
          }
          checkStrike();
        setTimeout(()=>{
          gameState = "play";
          basilisk.sprite.x = windowWidth/2;
          basilisk.sprite.changeAnimation("slither-right");
          basilisk.sprite.scale = 2*factor;
          

        },1000);
    
      },2000);
    
  }
  if(form.harryHealth <= 0 || counter<=0){
  gameState = "end";
  }
}
function  end (){
  console.log("end");
  form.reset.show();
  form.harryDiv.hide();

  basilisk.sprite.changeAnimation("slither-right");
  if(form.harryHealth <=0){
    textSize(50);
    fill("red");
    text("You Lose!",windowWidth/2-100, windowHeight/13);
    harry.sprite.visible = false;
  } else{
    textSize(50);
    fill("green");
    text("You Win!",windowWidth/2 - 100, windowHeight/13);
    basilisk.sprite.visible = false;
  }
}
