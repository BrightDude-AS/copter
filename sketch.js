//creating the variable for spaceship and its image
var spaceship,spaceshipIMG;

//creating the variable for point and its image
var point1,point2,point3,point4,point5,point6,point7,point8,point9,pointIMG;

//creating the variable for tank and its image
var tank = [], tankIMG;

var bulletIMG;

//creating the variable for giving the direction to spaceship
var direction = "north"

//creating the variable for the background
var bgIMG;

// creating the varib3,b3,b3,able for edges and the wall
var wall1, wall2, wall3, wall4;

var count = 0;
var tankCount = 0;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18;

var bullet = []
var i = 0;

function preload () {

//loading the spaceship, point, tank , and background images
spaceshipIMG = loadImage("images/spaceship.png");
pointIMG = loadImage("images/point.png");
tankIMG = loadImage("images/tank.png");
bulletIMG = loadImage("images/bullet.png");
bgIMG = loadImage("images/background.jpg");


}

function setup () {

//creating the canvas
createCanvas(1250,720);


// creating the invisible wall
wall1 = createSprite(500,350,2000,0.1);
wall2 = createSprite(500,0,2000,0.1);
wall3 = createSprite(0,175,0.1,350);
wall4 = createSprite(1250,175,0.1,350);


// creating the sprite for the point and adding the image
for (var i = 0; i<10 ; i++) {
point[i] = createSprite(Math.round(random(50,1200)) , Math.round(random(50,680)))
point[i].addImage(pointIMG)
point[i].scale = 0.2;
}


// creating the sprite for the tank and adding the image
for (var i = 0; i<6 ; i++) {
    tank[i] = createSprite(Math.round(random(50,1200)) , Math.round(random(50,320)))
    tank[i].addImage(tankIMG)
    tank[i].scale = 0.5
    tank[i].rotation = 180;
    tank[i].velocityX = 3;
    tank[i].velocityY = 1;

}
tank[0].velocityX = 0;



// creating the sprite for the spaceship and adding the image
spaceship = createSprite(500,500)
spaceship.addImage(spaceshipIMG);
spaceship.scale = 0.2;

}

function draw () {
//adding the color to the background
background(bgIMG);

for (var i = 0; i<6 ; i++) {
tank[i].bounceOff(wall1)
tank[i].bounceOff(wall2)
tank[i].bounceOff(wall3)
tank[i].bounceOff(wall4)
}



if(frameCount % 100 === 0){
     b1 = createSprite(tank[1].x , tank[1].y, 10, 10)
    b1.velocityY = 3
    b2 = createSprite(tank[1].x , tank[1].y, 10, 10)
    b2.velocityY = 4
     b3 = createSprite(tank[1].x , tank[1].y, 10, 10)
    b3.velocityY = 5

}


if(frameCount % 150 === 0){
     b4 = createSprite(tank[2].x , tank[2].y, 10, 10)
    b4.velocityY = 3
     b5 = createSprite(tank[2].x , tank[2].y, 10, 10)
    b5.velocityY = 4
     b6 = createSprite(tank[2].x , tank[2].y, 10, 10)
    b6.velocityY = 5

}


if(frameCount % 200 === 0){
     b7 = createSprite(tank[3].x , tank[3].y, 10, 10)
    b7.velocityY = 3
     b8 = createSprite(tank[3].x , tank[3].y, 10, 10)
    b8.velocityY = 4
     b9 = createSprite(tank[3].x , tank[3].y, 10, 10)
    b9.velocityY = 5

}


if(frameCount % 250 === 0){
     b10 = createSprite(tank[4].x , tank[4].y, 10, 10)
    b10.velocityY = 3
     b11 = createSprite(tank[4].x , tank[4].y, 10, 10)
    b11.velocityY = 4
     b12 = createSprite(tank[4].x , tank[4].y, 10, 10)
    b12.velocityY = 5

}


if(frameCount % 300 === 0){
     b13 = createSprite(tank[5].x , tank[5].y, 10, 10)
    b13.velocityY = 3
     b14 = createSprite(tank[5].x , tank[5].y, 10, 10)
    b14.velocityY = 4
     b15 = createSprite(tank[5].x , tank[5].y, 10, 10)
    b15.velocityY = 5

}


if(frameCount % 350 === 0){
     b16 = createSprite(tank[0].x , tank[0].y, 10, 10)
    b16.velocityY = 3
     b17 = createSprite(tank[0].x , tank[0].y, 10, 10)
    b17.velocityY = 4
     b18 = createSprite(tank[0].x , tank[0].y, 10, 10)
    b18.velocityY = 5

}

if(b1 != null){
    if(b1.isTouching(spaceship)){
        count++;
        b1.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b2 != null){
    if(b2.isTouching(spaceship)){
        count++;
        b2.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b3 != null){
    if(b3.isTouching(spaceship)){
        count++;
        b3.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b4 != null){
    if(b4.isTouching(spaceship)){
        count++;
        b4.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b5 != null){
    if(b5.isTouching(spaceship)){
        count++;
        b5.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b6 != null){
    if(b6.isTouching(spaceship)){
        count++;
        b6.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b7 != null){
    if(b7.isTouching(spaceship)){
        count++;
        b7.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b8 != null){
    if(b8.isTouching(spaceship)){
        count++;
        b8.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b9 != null){
    if(b9.isTouching(spaceship)){
        count++;
        b9.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b10 != null){
    if(b10.isTouching(spaceship)){
        count++;
        b10.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b11 != null){
    if(b11.isTouching(spaceship)){
        count++;
        b11.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b12 != null){
    if(b12.isTouching(spaceship)){
        count++;
        b12.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b13 != null){
    if(b13.isTouching(spaceship)){
        count++;
        b13.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}

}if(b14 != null){
    if(b14.isTouching(spaceship)){
        count++;
        b14.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b15 != null){
    if(b15.isTouching(spaceship)){
        count++;
        b15.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b16 != null){
    if(b16.isTouching(spaceship)){
        count++;
        b16.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b17 != null){
    if(b17.isTouching(spaceship)){
        count++;
        b17.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}

if(b18 != null){
    if(b18.isTouching(spaceship)){
        count++;
        b18.destroy();
    //console.log(count)
    if(count > 5){
        spaceship.destroy();
    }
}
}




if (keyDown("w")) {
spaceship.y -=5;
}

if (keyDown("s")) {
    spaceship.y +=5;
}

if (keyDown("a")) {
    spaceship.x -=5;
}

if (keyDown("d")) {
     spaceship.x +=5;
}
            
if (keyDown("right")) {
    spaceship.rotation = 90
    direction = "east"
}
 
if (keyDown("left")) {
    spaceship.rotation = -90
    direction = "west"

}


if (keyDown("up")) {
    spaceship.rotation = 0
    direction = "north"

}


if (keyDown("down")) {
    spaceship.rotation = 180
    direction = "south"

}

for(var i =0 ; i < bullet.length; i++){
    if(bullet[i].isTouching(tank[0])){
        tankCount ++ ;
        if(tankCount >= 3){
            tank[0].destroy;
        }
    }
}


//showing the sprites to the game
drawSprites();

}

function keyPressed () {
    if (keyCode === 32) {

        bullet.push(createSprite(spaceship.x + 20, spaceship.y, 5, 5))
        i++;
        bullet[i-1].addImage(bulletIMG);
        bullet[i-1].scale = 0.2;

        if(direction === "east"){
             
            // bullet[bulletCount].rotation = 180;
             bullet[i-1].velocityY = 0;
             bullet[i-1].velocityX = 3;
         
            }
                
               
        }
        if(direction === "west"){
            //bullet[bulletCount].rotation = 0;
            bullet[i-1].velocityY = 0;
            bullet[i-1].velocityX = -3;
           
              
       }
       if(direction === "north"){
        //bullet[bulletCount].rotation = 90;
        bullet[i-1].velocityY = -3;
        bullet[i-1].velocityX = 0;
     
          
   }
   if(direction === "south"){
   //bullet[bulletCount].rotation = -90;
    bullet[i-1].velocityY = 3;
    bullet[i-1].velocityX = 0;

    }


}