

function setup() {
createCanvas(windowWidth, windowHeight);


}

function draw() {
  line(0,0,Width,Height);
  line(Width,0,0, Height);


}

function windowResized(){
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);

}
