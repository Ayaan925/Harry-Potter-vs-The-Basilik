class Form{
    constructor(){
       this.harryHealth = 100;
        this.harryDiv = createDiv();
        this.harryDiv.position(windowWidth*1/10, windowHeight/15);
        this.harryDiv.style('width:80%');
        this.harryDiv.style('height:60px');
        this.harryDiv.style('background-color: gray');
        
        this.harryHealthBar  = createElement("PROGRESS"); 
        this.harryHealthBar.style('width:100%');
        this.harryHealthBar.style('height:60px');
        this.harryHealthBar.style('background-color: green');
        this.harryHealthBar.style('background-image: linear-gradient(to right, green, lightgreen,yellow, orange, red)');
        this.harryHealthBar.elt.setAttribute("max", 100);
        this.harryHealthBar.elt.setAttribute("value", this.harryHealth);
        this.harryDiv.child(this.harryHealthBar);




    }

decreaseHealthBar(){
    this.harryHealth = this.harryHealth-20;
    this.harryHealthBar.elt.setAttribute("value", this.harryHealth);
}




display(){

}








}
