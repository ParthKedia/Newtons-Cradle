
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2;
var bob3,bob4;
var bob5;

var roof1;

var rope1,rope2;
var rope3,rope4;
var rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(400,20,800,30);
	
	bob1 = new bob(400,400,33);
	bob2 = new bob(350,400,33);
	bob3 = new bob(300,400,33);
	bob4 = new bob(450,400,33);
	bob5 = new bob(500,400,33);

	rope1= new rope(bob1.body,roof1.body,0,20);
    rope2= new rope(bob2.body,roof1.body,-70,20);
	rope3= new rope(bob3.body,roof1.body,-140,20);
	rope4= new rope(bob4.body,roof1.body,70,20);
	rope5= new rope(bob5.body,roof1.body,140,20);

	console.log(bob1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

Engine.update(engine);

  roof1.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();
   
  drawSprites();
 
}

function keyPressed(){
if(keyCode === 32){

	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-150,y:-150});
}

}

