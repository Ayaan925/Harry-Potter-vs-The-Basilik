class Player{
constructor(){
    this.animation = loadAnimation("./images/harry0.png","./images/harry1.png" );
      this.sprite = createSprite(windowWidth/2, windowHeight*8/10);
      this.sprite.debug = false;
  if (this.animation)
    this.animation.frameDelay = 10;
    
    this.sprite.addAnimation("harryRun", this.animation);
    this.sprite.scale = 0.8*factor;
  
}




display(){
    
    if(keyDown("left")){
        this.sprite.x = this.sprite.x -20;
      }
      if(keyDown("right")){
        this.sprite.x = this.sprite.x +20;
      }
      this.sprite.collide(rightWall);
      this.sprite.collide(leftWall);
      drawSprites();     
}




}