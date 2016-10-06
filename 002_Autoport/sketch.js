var xPos = 10;
var yPos = 10;
//width & height
var W, H, d;


function setup() {
//print("hello World")

W = 300;
H = 800;
d = 30*W/100;


createCanvas(W,H);
// background(255,255,0);
frameRate(1);

}

function draw() {
//  print("hello World");
//background(255,255,0);
  stroke(0,0,255);
  fill(255,255,255);
  // rect(xPos,yPos,50,100);
  line(W/4,0,10,10);
  line(W/4,50,10,10);

  ellipse(10*H/100,10*H/100,d,d);




}
