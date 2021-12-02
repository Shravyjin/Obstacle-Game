var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var Drink, DrinkImg
var coin,coinImg
var bomb,bombImg 

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  DrinkImg = loadImage("energyDrink.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2

// Moving Drink
Drink = createSprite(100,100);
Drink.addImage(DrinkImg);
Drink.velocityY = 4;
Drink.scale = 0.1;

//Moving bomb
bomb = createSprite(200,200);
bomb.addImage(bombImg);
bomb.velocityY = 4;
bomb.scale = 0.1;

//Moving coin
coin = createSprite(320,250);
coin.addImage(coinImg);
coin.velocityY = 4;
coin.scale = 0.4;
//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);


leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
   if(boy.collide.bomb||boy.collide.coin||boy.collide.Drink){
    gameover();
   }

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  if(Drink.y > 400 ){
    Drink.y = height*1/2;
  }
  
  if(bomb.y > 400 ){
    bomb.y = height*1/2;
  }
  
  if(coin.y > 400 ){
    coin.y = height*1/17;
  }

  drawSprites();
}
function gameover(){
bomb.velocity.y = 0;
coin.velocity.y = 0;
Drink.velocity.y = 0;
path.velocity.y = 0;
Text("GAME OVER!",200,200);
}