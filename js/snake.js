class Snake {
constructor(){
this.strikeRight = loadAnimation("./images/strike-right/sprite_0.png","./images/strike-right/sprite_1.png",
"./images/strike-right/sprite_2.png","./images/strike-right/sprite_3.png",
"./images/strike-right/sprite_4.png","./images/strike-right/sprite_5.png");
this.slitherRight = loadAnimation("./images/slither-to-right/sprite_00.png","./images/slither-to-right/sprite_01.png",
"./images/slither-to-right/sprite_02.png","./images/slither-to-right/sprite_03.png","./images/slither-to-right/sprite_04.png",
"./images/slither-to-right/sprite_05.png","./images/slither-to-right/sprite_06.png",
"./images/slither-to-right/sprite_07.png","./images/slither-to-right/sprite_08.png","./images/slither-to-right/sprite_09.png");
this.slitherLeft = loadAnimation("./images/slither-to-left/sprite_00.png","./images/slither-to-left/sprite_01.png",
"./images/slither-to-left/sprite_02.png","./images/slither-to-left/sprite_03.png","./images/slither-to-left/sprite_04.png",
"./images/slither-to-left/sprite_05.png","./images/slither-to-left/sprite_06.png",
"./images/slither-to-left/sprite_07.png","./images/slither-to-left/sprite_08.png","./images/slither-to-left/sprite_09.png");
this.sprite = createSprite(windowWidth/2,windowHeight/2);
this.sprite.scale = 2;
if(this.slitherRight){
    this.slitherRight.frameDelay = 7;
    }
    if(this.strikeRight){
        this.strikeRight.frameDelay = 7;
        }


this.sprite.addAnimation("slither-right", this.slitherRight);
this.sprite.addAnimation("slither-left", this.slitherLeft);
this.sprite.addAnimation("strike-right", this.strikeRight);
}

display(){



    drawSprites();
}

}