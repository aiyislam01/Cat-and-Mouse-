var cat,cat1,cat2,cat3,cat4
var mouse,mouse1,mouse2,mouse3,mouse4
var garden,gardenImg


function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png")
cat1=loadAnimation("images/cat1.png")
mouse1=loadAnimation("images/mouse1.png")
cat2=loadAnimation("images/cat2.png","images/cat3.png")
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
cat3=loadAnimation("images/cat4.png")
mouse3=loadAnimation("images/mouse4.png")
} 

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(850,600)
 cat.addAnimation("cat",cat1)
 cat.scale=0.2

 mouse = createSprite(200,600)
 mouse.addAnimation("mouse",mouse1)
 mouse.scale=0.2
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    mouse.velocityX=0
    cat.addAnimation("cat",cat3)
    cat.changeAnimation("cat")
    mouse.addAnimation("mouse",mouse3)
    mouse.changeAnimation("mouse")
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode==LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("running",cat2)
      cat.changeAnimation("running")
      mouse.addAnimation("running",mouse2)
      mouse.changeAnimation("running")
      mouse.frameDelay=22
  }
 
  




}
