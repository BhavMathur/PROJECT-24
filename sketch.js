
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin1 , Dustbin2,Dustbin3;
var Ground;
var Paper,paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  var Dustbin1=createSprite(680,680,200,20);
  Dustbin1.shapeColor="purple";
  var Dustbin2=createSprite(580,630,20,100);
  Dustbin2.shapeColor="purple";
  var Dustbin3=createSprite(780,630,20,100);
  Dustbin3.shapeColor="purple";
  var Ground = createSprite(600,700,1200,20);
  Ground.shapeColor="yellow";
  var Paper = createSprite(200,675,20,20);
  Paper.shapeColor=("cyan");
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



