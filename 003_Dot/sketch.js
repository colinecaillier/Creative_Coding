/*var xPos = 10;
var yPos = 10;
/width & height*/

var W, H, d;
var Xpos, Ypos;


function setup() {
//print("hello World")

W = windowWidth;
H = windowHeight;
d = 4*W/100;

createCanvas(W,H);
background(195, 195, 195);

}

function draw() {

  for (Xpos = 25; Xpos < W ; Xpos+= d*1.5 ){
    for (Ypos = 25; Ypos < H ; Ypos+= d*1.5){


      if (Xpos >= 190 && Xpos <= 240 && Ypos >= 190 && Ypos <=240 ){
        fill (255,0,0);
      }
        else{
            fill(125,125,125);
            }




      noStroke();
      ellipse(Xpos,Ypos, d, d);



    }
  }


}

function windowResized() {
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}
