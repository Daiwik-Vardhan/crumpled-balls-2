
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject,dustbinImg,paperImg;
var world;

function preload() {
 
    dustbinImg = loadImage("sprites/dustbingreen.png");
   paperImg = loadImage("sprites/paper.png");

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=createSprite(1350,580,20,20);
	dustbinObj.addImage("dustbingreen",dustbinImg);
	dustbinObj.scale = 0.5
	paperObject=createSprite(100,400,20,20);
	paperObject.addImage("paper",paperImg);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





