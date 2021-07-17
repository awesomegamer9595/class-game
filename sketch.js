var Background1,BackgroundImage;
var car,Jake,zombie1,Jake_Image,zombieImage;
var edge,rock_image,rock,attack_animation ,Jake_Attack;
var jake_jumpImage,ground,zombies,shurikens;
var shuriken,shurikenImage;
function preload(){
    BackgroundImage=loadImage("level_One.gif.2.gif")
    Jake_Image=loadAnimation("ninja/Run_000.png","ninja/Run_001.png","ninja/Run_002.png","ninja/Run_003.png","ninja/Run_004.png","ninja/Run_005.png","ninja/Run_006.png","ninja/Run_007.png","ninja/Run_008.png","ninja/Run_009.png")
zombieImage=loadAnimation("zombie/Walk (1).png","zombie/Walk (2).png","zombie/Walk (3).png",
"zombie/Walk (4).png","zombie/Walk (5).png","zombie/Walk (6).png","zombie/Walk (7).png",
"zombie/Walk (8).png")
shurikenImage=loadImage("shuriken1.png")
rock_image=loadImage("rock.png")
jake_jumpImage=loadAnimation("ninja/Jump_000.png","ninja/Jump_000.png","ninja/Jump_001.png","ninja/Jump_001.png","ninja/Jump_002.png","ninja/Jump_003.png","ninja/Jump_004.png","ninja/Jump_005.png","ninja/Jump_006.png","ninja/Jump_006.png","ninja/Jump_007.png","ninja/Jump_007.png","ninja/Jump_008.png")
attack_animation=loadAnimation("ninja/Throw__000.png","ninja/Throw__001.png","ninja/Throw__003.png","ninja/Throw__004.png","ninja/Throw__005.png","ninja/Throw__006.png","ninja/Throw__007.png","ninja/Throw__008.png","ninja/Throw__009.png")
}


function setup(){
createCanvas(1000,455)
Background1=createSprite(0,225,1000,680)
Background1.x=Background1.width/2
//Background1.width = 1200;
//Background1.height = 600;
//edge=createEdgeSprites();
ground=createSprite(500,454,1000,1)
Background1.addImage(BackgroundImage)
Jake=createSprite(400,400,10,40)
Jake.addAnimation("Jake_Image",Jake_Image)
Jake.addAnimation("jake_jumpImage",jake_jumpImage)
Jake.addAnimation("attack_animation",attack_animation)
Jake.scale=0.28;
zombies=createGroup()
shurikens=createGroup();
}

function draw(){
background(0)
Background1.velocityX=-2
if(Background1.x<0){
Background1.x=Background1.width/2

}

if(Jake.velocityY===0||Jake.velocityY===0.4){
Jake.changeAnimation("Jake_Image",Jake_Image)
Jake.velocityX=0
}
console.log(Jake.y)
shurikens.debug=true;
shurikens.bounceOff((zombies,Attack_Zombie))
//shurikens.destroyEach();
//zombies.destroyEach();

if(ground.x<0){
    ground.x=ground.x.width/2
}
ground.visible=false
if(keyDown(RIGHT_ARROW)){
Jake.x=Jake.x+10

}
else if(keyDown(LEFT_ARROW)){
    Jake.x=Jake.x-10
    
    }
 
 else if(keyDown(DOWN_ARROW)){
            Jake.y=Jake.y+20
            
            }
        
        else if(keyDown("space")&Jake.y>360){
            Jake.velocityY=-9
            Jake.changeAnimation("jake_jumpImage",jake_jumpImage)
        Jake.velocityX=1 
        }
        else if(keyWentUp("g")){
        Attack();

        }





        Jake.velocityY=Jake.velocityY+0.4
Jake.collide(ground)


spawnZombie();
spawnRock();

drawSprites();
}


function spawnZombie(){

if(frameCount%150===0){
zombie1=createSprite(Jake.x+700,400,40,40)
zombie1.velocityX=-4
zombie1.collide(ground)

zombie1.addAnimation("ZOMBIE",zombieImage)

zombie1.scale=0.25;
zombies.add(zombie1)
}



}
function spawnRock(){
    if(frameCount%100===0){
        rock=createSprite(Jake.x+900,415,40,40)
        rock.velocityX=-5
        rock.addImage(rock_image)
        rock.scale=0.45
        rock.collide(ground)
    }
}

function Attack(){
    
Jake.velocityX=0;
shuriken=createSprite(Jake.x,Jake.y,10,10)
shuriken.velocityX=2;
shuriken.addImage(shurikenImage)

shuriken.scale=0.10
Jake.changeAnimation("attack_animation",attack_animation)
shurikens.add(shuriken)    
}

function Attack_Zombie(shurikens,zombie){

zombie.remove();
//shurikens.remove();
//Reconnecting now
}
