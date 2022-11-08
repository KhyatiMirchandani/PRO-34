
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img
var cannon, ground, slope
var angle
var canvas
var cannonBall
var balls = []
var ball
var alien
function preload(){
  bg_img = loadImage("SPACE.jpg") 
}


function setup() {
  canvas= createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  slope = Bodies.rectangle(300, 294, 600, 20, { isStatic: true });
  World.add(world, slope);

 cannon = new Cannon(590,490,130,100,angle);
 //cannonBall = new CannonBall(cannon.x,cannon.y);
 alien= new Alien(500,100,120,50,-190);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  bg_img.velocityY=0.5
  Engine.update(engine)

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  push();
translate(slope.position.x, slope.position.y);
rectMode(CENTER);
fill("white")
rect(slope.position.x, slope.position.y, 600, 20);
pop();

for (var i = 0; i < balls.length; i++) {
  showCannonBalls(balls[i], i);

  Matter.Body.setVelocity(alien.body,{x:0,y:2})
  alien.display();


  cannon.display();

}
}

function keyPressed(){
  if (keyCode === DOWN_ARROW) {
  var cannonBall = new CannonBall (cannon.x,cannon.y);
  cannonBall.trajectory=[]
  balls.push(cannonBall);
 }
 }
 
 function showCannonBalls(ball,i){
   if (ball) {
     ball.display();
   }
  }
 
 
 function keyReleased() {
   if (keyCode === DOWN_ARROW) {
     balls [balls.length - 1].shoot();
 
   }
  }