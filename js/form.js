class Form{
    constructor(){
        this.harryDiv = createDiv();
        this.harryDiv.position(windowWidth*6/10, windowHeight/15);
        this.harryDiv.style('width:30%');
        this.harryDiv.style('height:60px');
        this.harryDiv.style('background-color: gray');
        
        this.harryHealthBar  = createElement("PROGRESS"); 
        this.harryHealthBar.style('width:100%');
        this.harryHealthBar.style('height:60px');
        this.harryHealthBar.style('background-color: green');
        //this.harryHealthBar.style('background-image: linear-gradient(to right, green, lightgreen,yellow, orange, red)');
        
        this.harryDiv.child(this.harryHealthBar);




    }




display(){

}








}
