const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground,right,left,topwall
var ball
var bt1, bt2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  
  bt1 = createImg("right.png");
  bt1.position(220,30);

  bt1.size(50,50)
  bt1.mouseClicked(hForce);

  bt2 = createImg("up.png");
  bt2.position(30,30);

  bt2.size(50,50)
  bt2.mouseClicked(vForce);

  ground = new Ground(200,390,400,20)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  left = new Ground(10,200,20,400)
  right = new Ground(390,200,20,400);
  topwall = new Ground(200,10,400,20);
  ball_options = {
    restitution : 0.5,
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  
} 

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  ground.show()
  left.show()
  right.show()
  topwall.show()

} 
function hForce() {

  Matter.Body.applyForce(ball , { x:0,y:0},{x:0.05,y:0})
}

function vForce() {

  Matter.Body.applyForce(ball , { x:0,y:0},{x:0,y:-0.05})
}



