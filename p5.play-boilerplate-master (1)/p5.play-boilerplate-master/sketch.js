const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ,swing
var conlog,chain;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    swing = new Bird(100,100);

    conlog = new Log(230,180,80,PI/2);
    chain = new Chain(bird.body,conlog.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    ground.display();
    
    conlog.display();
    chain.display();
    swing.display();
   
}
