class Player{
constructor(){
    this.animation = loadAnimation("../images/harry0.png","../images/harry1.png" );
      this.sprite = createSprite(800,600);
  if (this.animation)
    this.animation.frameDelay = 10;
    
    this.sprite.addAnimation("harryRun", this.animation);
  
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