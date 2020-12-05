class Player{
constructor(){
    this.animation = loadAnimation("./images/harry0.png","./images/harry1.png" );
      this.sprite = createSprite(windowWidth/2, windowHeight*3/4);
  if (this.animation)
    this.animation.frameDelay = 10;
    
    this.sprite.addAnimation("harryRun", this.animation);
    this.sprite.scale = 0.7;
  
}




display(){
    
    if(keyDown("left")){
        this.sprite.x = this.sprite.x -20;
      }
      if(keyDown("right")){
        this.sprite.x = this.sprite.x +20;
      }
      drawSprites();     
}




}