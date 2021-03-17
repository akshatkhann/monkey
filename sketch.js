var backImage,backgr,score;
var player, player_running;
var ground,ground_img;
var Foodgroup;
var END =0,scores;
var PLAY =1, bananaImage;
var gameState = PLAY,stone;

function preload(){
  bananaImage=loadImage("banana.png")
  stone=loadImage("stone.png")
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
Foodgroup= new Group()
stonegroup= new Group()
}

function setup() {
  createCanvas(800,400);
 
  backgr=createSprite(0,0,800,400); 
  backgr.addImage(backImage);
  backgr.scale=1.5
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  score=0
}

function draw() { 

 background(0);
 
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space")&& player.y>200) {
      player.velocityY = -15;
    }
    player.velocityY = player.velocityY +  0.8 ;
  
    player.collide(ground);

  }
  
 

  drawSprites();
  spawnFood()
}
function spawnFood(){
  textSize(30)  
  fill(255)
  text("score : "+score,650,50)


  if(frameCount%100===0){
var banana=createSprite(600,random(120,200))
banana.addImage(bananaImage)
banana.scale=0.05
banana.velocityX=-5
banana.lifetime=300
player.depth=banana.depth+1
Foodgroup.add(banana)
}

if(Foodgroup.isTouching(player)){
Foodgroup.destroyEach()

player.scale+=+0.1
score=score+2
}
if(frameCount%150===0){
  var stones=createSprite(600,340)
  stones.addImage(stone)
  stones.scale=0.15
  stones.velocityX=-5
  stones.lifetime=300
  player.depth=stones.depth+1
  stonegroup.add(stones)
  }
  
  if(stonegroup.isTouching(player)){
  stonegroup.destroyEach()
  
gameState=END;
  }
  if(gameState===END){
    backgr.velocityX=0
    player.visible=false
    Foodgroup.destroyEach()
    stonegroup.destroyEach()
    textSize(30)
    fill(255)
    text("GAME OVER !",300,220) 
  
    
  }

 
  
 }













