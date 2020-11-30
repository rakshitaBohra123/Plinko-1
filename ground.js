class Ground{
constructer(x,y){
var options={
    isStatic:true
}
this.width=480;
this.height=10;
this.body = Bodies.rectangle(x,y,480,800,options);
World.add(world,this.body);
}
 display(){
var pos = this.position;
rectMode(CENTER)
fill("white")
rect( pos.x , pos.y, 480, 800)
 }  
}