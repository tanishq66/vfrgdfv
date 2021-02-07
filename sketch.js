var fixedRect, movingRect;
var object,object2;
var object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object = createSprite(500, 300, 50, 80);
  object.shapeColor = "green";

  object2 = createSprite(400, 300, 50, 80);
  object2.shapeColor = "green";

  object3 = createSprite(200, 300, 50, 80);
  object3.shapeColor = "green";

  object4 = createSprite(100, 300, 50, 80);
  object4.shapeColor = "green";
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.isTouching(object2)){
    movingRect.shapeColor="blue";
    object2.shapeColor="blue";
     }else{
   movingRect.shapeColor="green";
   object2.shapeColor="green";
   
     }

     if(movingRect.isTouching(object3)){
      movingRect.shapeColor="yellow";
      object3.shapeColor="yellow";
       }else{
     movingRect.shapeColor="green";
     object3.shapeColor="green";
     
       }
     
       if(movingRect.isTouching(object4)){
        movingRect.shapeColor="pink";
        object4.shapeColor="pink";
         }else{
       movingRect.shapeColor="green";
       object4.shapeColor="green";
       
         }

         if(movingRect.isTouching(object)){
          movingRect.shapeColor="red";
          object.shapeColor="red";
           }else{
         movingRect.shapeColor="green";
         object.shapeColor="green";
         
           }
           if(movingRect.isTouching(fixedRect)){
            movingRect.shapeColor="lightBlue";
            fixedRect.shapeColor="lightBlue";
             }else{
           movingRect.shapeColor="green";
           fixedRect.shapeColor="green";
           
             }
  drawSprites();
}
