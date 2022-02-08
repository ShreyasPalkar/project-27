const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,600,150);
	bobObject2 = new Bob(350,600,150);
	bobObject3 = new Bob(500,600,150);
	bobObject4 = new Bob(650,600,150);
	bobObject5 = new Bob(800,600,150);
	roof = new Roof(500,100,700,40);
	rope1=new Rope(bobObject1.body, roof.body, -0*2, 0);
	rope2=new Rope(bobObject2.body, roof.body, -0*2, 0);
	rope3=new Rope(bobObject3.body, roof.body, -0*2, 0);
	rope4=new Rope(bobObject4.body, roof.body, -0*2, 0);
	rope5=new Rope(bobObject5.body, roof.body, -0*2, 0);

  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.run(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 
  roof.display(); 
  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 
  //keyPressed();

}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-5,y:5});
	}
}*/
