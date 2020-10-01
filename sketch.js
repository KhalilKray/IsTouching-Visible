var x1,x2,y1,y2,w1,w2,h1,h2;
var color;
function setup() {
  createCanvas(800,400);
  x1 = 300;
  y1 = 200;
  w1 = 50;
  h1 = 100;

  x2 = 300;
  y2 = 200;
  w2 = 100;
  h2 = 50;
  
  color = "blue";
}

function draw() {
  background(0); 
  fill(color);
   
  x2 = mouseX;
  y2 = mouseY;
  ellipse(x1,y1,w1,h1);
  ellipse(x2,y2,w2,h2);

  if(x2 - x1 <= w2/2 + w1/2 && x1 - x2 <= w2/2 + w1/2 &&
     y2 - y1 <= h2/2 + h1/2 && y1 - y2 <= h2/2 + h1/2) {
    color = "red";
  }
  else{
    color = "blue";
  }
}