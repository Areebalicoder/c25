const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Rain;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Rain = new base(0,0,2,5);
  Rain.shapecolor="red";
  Rain.velocityY=2;
}

function draw() {
  background(0);
  Engine.update(engine);

  if(Rain.y<410){
    Rain.y=-10;
    Rain.x=randomNumber(0,400);
  }
  Rain.display();
  
}