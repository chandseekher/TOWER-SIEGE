const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var engine, world;
 var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12,block13,block14,block15;
 var block16;
 var player;
 var ground1,ground2,ground3;
 var sling;
 var ball;
 var img;
 polygon=Bodies.circle(50,200,20);
 world.add(world,polygon);

 slingshot=new Slingshot (this.polygon,{x:100,y:200});
 function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine= Engine.create();
  world = engine.world;
 //level one
  block1 = new Block(120,275,30,40);
  block2= new Block (150,275,30,40);
  block3= new Block (180,275,30,40);
  block4= new Block (210,275,30,40);
  block5= new Block (240,275,30,40);
  block6= new Block (270,275,30,40);
  block7= new Block(300,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  bolck10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);
  //top
  block16=new Block(390,155,30,40);

  player = new Player(50,200,30,30);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  sling = new Chain(this.ball,{x:150, y:160});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("purple");
  block8.display();
  block9.display();
  bolck10.display();
  block11.display();
  block12.display();
  fill("pink");
  block13.display();
  block14.display();
  block15.display();
  fill("red");
  sling.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
    Matter.Body.setPosition(player.body,{x:235, y:420})
  chain.attach(player.body);
}
}