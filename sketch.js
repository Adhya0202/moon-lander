let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;
var fuel = 100;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
  leftThrust = loadAnimation("left_thruster_1.png","left_thruster_2.png")
  rightThrust = loadAnimation("right_thruster_1.png","right_thruster_2.png")

  thrust.playing = true;
  thrust.looping = false;
  leftThrust.looping = false;
rightThrust.looping = false;
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  thrust.frameDelay = 5
  leftThrust.frameDelay =5
  rightThrust.frameDelay = 5
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  lander.addAnimation("thrusting",thrust);
  rectMode(CENTER);
  textSize(15);
  lander.addAnimation("LeftThrusting",leftThrust);
  lander.addAnimation("rightThrusting",rightThrust)
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  text("Horizontal Velocity: "+round(vx),800,55);
  text("fuel= "+fuel,800,35)
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy
  lander.position.x+=vx

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    vy = -1;
   lander.changeAnimation("thrusting");
   thrust.nextFrame()
   fuel-=1;
  }
  if(keyCode === LEFT_ARROW){
    vx -= 0.2;
    lander.changeAnimation("LeftThrusting");
    fuel-=1
  }
  if(keyCode === RIGHT_ARROW){
    vx += 0.2;
    lander.changeAnimation("rightThrusting");
   fuel-=1;
  }
}

