
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//you will be requiring one more matter.js 
//function called as Matter.Render


// create the varibales for the dustbin,paper and ground
var Paper;
var Dustbin;
var Ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Use the classes of ground,paper and dustbin to create the objects
	Ground = new ground(600,height,1200,20);
	Paper = new paper (200,50,20,20);
	Dustbin= new dustbin (620,680,30,30);
	//use the hint given to you in the PDF of the project


	//writing the code  for render here
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//display the ground,paper and dustbin objects here

Ground.display();
Paper.display();
Dustbin.display();
 
}

//check out hint no.4 and write the code of function key pressed here
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15,y:-15});
	}
}

