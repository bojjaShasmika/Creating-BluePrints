const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2;
var box3;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
   


    

    console.log(ground);

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);


    ground = new Ground()

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);

    

    box1.boxDisplay()

    box2.boxDisplay()

   

    ground.groundDisplay();
}


/*
1. create a variable for the object
2. mention that the object belongs to he specific class in the function setup() --> 
        objectName = new Classname()
3. display the object in the function draw()
        objectName.functionName()
*/