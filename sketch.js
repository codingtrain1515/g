
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let ball;
let blower;
var btn
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2, width/4, 50, 50);
 
  blower=createSprite(width / 2 - 250 , width /4 ,100,20)





  frameRate(650);

}

function draw() {
  background(56);

  if(keyDown("space")){
    vForce()
  }

  Engine.update(engine);
  
 ball.display();


drawSprites();
 

} 

function vForce(){
  Matter.Body.applyForce(ball.Body,blower,{x:0,y:0},{x:0,y:-1})
  }
  













