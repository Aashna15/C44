var bg , backgroundImg;
var boy , boyRunning;
var obstacle1;
var gameState=PLAY;
var PLAY=1;
var END=0;
function preload(){
  backgroundImg=loadImage('images/Forest bg 2.jpg')
  boyRunning=loadAnimation('images/RB1.PNG','images/RB2.PNG','images/RB3.PNG' )
  obstacle1=loadImage('images/ObstacleT1.PNG')

}

function setup(){
  createCanvas(1000,600)
  bg=createSprite(800,300,2000,800)
  bg.addImage(backgroundImg)
  bg.scale=2;
  bg.velocityX=-3;
  bg.x=bg.width/2;
  boy=createSprite(100,500,50,90)
  boy.addAnimation('Running',boyRunning)
}

function draw(){
  
 
    if (bg.x<0){
      bg.x=bg.width/2;
    }
    obstacles()
drawSprites()
}

function obstacles(){
  if (frameCount%250===0){
  obstacle=createSprite(800,580,60,30)
  obstacle.addImage(obstacle1)
  obstacle.scale=0.5;
  obstacle.velocityX=-3;
  }
}



