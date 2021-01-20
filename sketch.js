
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box,box1,box2


function setup() {
	createCanvas(1800, 1700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(115,575,20);	
	ground = new Ground(400,610,800,10);
    box = new dustbin(550,583,60,10);
	box1 = new dustbin(610,610,10,110);
	box2 = new dustbin(670,583,60,10);

	Engine.run(engine);
	
  
}


function draw() {
  
  background(51, 214, 255);
  
  ball.display();
  ground.display();
  box.display();
  box1.display();
  box2.display();

  console.log(ball.body.position)
  //drawSprites();
  
  //text(mouseX,400,200)
 // text(mouseY,200,300)
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
		console.log("keypressed")
		Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
		
	  }
}


