 var bomb;
 var path;
 var coin;
 var runner;

 function preload () {

 boy_running = loadAnimation("Runner-1.png","Runner-2.png");    
 coinImg = loadImage("coin.png");
 bombImg = loadImage("bomb.png");
 pathImg = loadImage("path.png");
 energyDrinkImg = loadImage("energyDrink.png");
 powerImg = loadImage("power.png");

 }

 function setup () {

 createCanvas(400,400);

 var path = createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY = 8;
 path.scale = 1.2;

 var runner = createSprite(200,300);
 runner.scale = 0.1;
 runner.addAnimation("running",boy_running);

 }

 function draw () {
           
 background(0);

 
 if (path.y>400) {
 path.y = height/2;   
 }

 drawSprites();

 }