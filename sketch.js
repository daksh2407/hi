var movingrect,fixedrect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(800,400);
  //movingrect = createSprite(400, 200,80,30);
 // movingrect.shapeColor = "green";

  //fixedrect = createSprite(200,200,50,50);
  //fixedrect.shapeColor = "green";

  gameobject1 = createSprite(200,200,50,80);
  gameobject2 = createSprite(400,200,80,50);
  //gameobject3 = createSprite(400,);

  gameobject1.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
  //gameobject3.shapeColor = "blue";

  gameobject1.velocityX=5;
  gameobject2.velocityX=-5;
}
function draw() {
  background(255,255,255);  
  //movingrect.x = World.mouseX;
 // movingrect.y = World.mouseY;

  //if(isOverlapping(movingrect,gameobject2)){
 //   movingrect.shapeColor = "red";
//    gameobject2.shapeColor = "red";
 // }
 // else{
  //  movingrect.shapeColor = "green";
  //  gameobject2.shapeColor = "blue";
 // }
 if(isOverlapping(gameobject1,gameobject2)){
    gameobject1.shapeColor = "red";
   gameobject2.shapeColor = "red";
 }
  bounceOff(gameobject1,gameobject2);
  drawSprites();
}

