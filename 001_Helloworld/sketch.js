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
  line(0,0,W,H);
  line(W,0,0,H);

  ellipse(W/2,H/2,d,d);




}
