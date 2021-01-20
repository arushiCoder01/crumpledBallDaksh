class paper{
    constructor(x,y,radius)
    {
        var options = {

           'restitution':0.3,
           'isStatic':false,
           'friction':0.33,
           'density':1.2
           
        }
        this.body = Matter.Bodies.circle(x,y,radius,options)
        this.radius=radius
        
        World.add(world,this.body)
    }
    
display(){
        var pos = this.body.position 
        fill(225);
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        console.log("paperdisplay")
        pop()
}

}