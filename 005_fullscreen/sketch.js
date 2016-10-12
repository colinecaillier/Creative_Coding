
var mappedX;


function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  mappedX = map(mouseX,0, width,0,255);
  mappedY= map(mouseY,0,height, 0, 150);
  mappedA = map(mouseX,0,width,0.2,1);
  //background(mappedX);
 //print(mappedX,mappedY);
 print(mappedA);

  noStroke();
  fill(255-mappedY,255,255-mappedX);
  rect(mouseX,mouseY,mappedY,mappedY);

}

function mousePressed(){
  background(255);

}
