
var mappedX;


function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  mappedX = map(mouseX,0, width,0,255);
  mappedY= map(mouseY,0,height, 50, 200);
  background(mappedX);
  print(mouseX,mouseY);

  noStroke();
  fill(255-mappedX);
  ellipse(mouseX,mouseY,mappedY,mappedY);



}
