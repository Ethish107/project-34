
const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var engine,world,canvas;
var mouseConst;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;


function setup() {
  canvas = createCanvas(900,700);
  engine = Engine.create();
  world = engine.world;

     var canvasMouse = Mouse.create(canvas.elt);
      canvasMouse.pixelRatio = pixelDensity();    

  var options = {
    mouse : canvasMouse
  };
  mouseConst  = MouseConstraint.create(options);
  World.add(world,mouseConst);

  pendulum1 = new Pendulum(320,500,"#00b0ff");
  pendulum2 = new Pendulum(380,500,"#00b0ff");
  pendulum3 = new Pendulum(440,500,"#00b0ff");
  pendulum4 = new Pendulum(500,500,"#00b0ff");
  pendulum5 = new Pendulum(560,500,"#00b0ff");

  sling1 = new Sling(pendulum1.body,{x:320,y:280});
  sling2 = new Sling(pendulum2.body,{x:380,y:280});
  sling3 = new Sling(pendulum3.body,{x:440,y:280});
  sling4 = new Sling(pendulum4.body,{x:500,y:280});
  sling5 = new Sling(pendulum5.body,{x:560,y:280});


}

function draw() {
  background(117,236,198);  

  Engine.update(engine);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


  drawSprites();
  text(mouseX + "  " + mouseY,mouseX,mouseY);
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}