
var mappedX;


function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  mappedX = map(mouseX,0, width,0,255);
  background(mappedX);
  print(mouseX,mouseY);

  noStroke();  
  fill(255-mappedX);
  ellipse(mouseX,mouseY,mappedX,10);



}
