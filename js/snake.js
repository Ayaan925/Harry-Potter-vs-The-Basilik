class Snake {
constructor(){
this.strikeLeft;
this.strikeRight;
this.slitherRight = loadAnimation("../images/slither-to-right/sprite_00.png","../images/slither-to-right/sprite_01.png",
"../images/slither-to-right/sprite_02.png","../images/slither-to-right/sprite_03.png","../images/slither-to-right/sprite_04.png",
"../images/slither-to-right/sprite_05.png","../images/slither-to-right/sprite_06.png",
"../images/slither-to-right/sprite_07.png","../images/slither-to-right/sprite_08.png","../images/slither-to-right/sprite_09.png");
this.slitherLeft = loadAnimation("../images/slither-to-left/sprite_00.png","../images/slither-to-left/sprite_01.png",
"../images/slither-to-left/sprite_02.png","../images/slither-to-left/sprite_03.png","../images/slither-to-left/sprite_04.png",
"../images/slither-to-left/sprite_05.png","../images/slither-to-left/sprite_06.png",
"../images/slither-to-left/sprite_07.png","../images/slither-to-left/sprite_08.png","../images/slither-to-left/sprite_09.png");
this.sprite = createSprite(windowWidth/2,windowHeight/2);
this.sprite.scale = 3;
this.sprite.addAnimation("slither-right", this.slitherRight);
this.sprite.addAnimation("slither-left", this.slitherLeft);
}

display(){



    drawSprites();
}

}