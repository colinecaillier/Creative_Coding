var xPos = 10;
var yPos = 10;
//width & height
var W, H, d;


function setup() {
//print("hello World")

W = 200;
H = 400;
d = 7*W/100;


createCanvas(W,H);
background(218, 232, 233);
frameRate(2);

}

function draw() {
//  print("hello World");
//background(255,255,0);
//joues
fill(0,255,255);
noStroke();
ellipse(xPos*3,yPos*7.3,d,d)
ellipse(xPos*15.2,yPos*7.3,d,d)

//Arrondi lunette
fill(255,255,255);
stroke(0,0,255);
ellipse(xPos*5.2, yPos*4, 60,60);
ellipse(xPos*13.2, yPos*4, 60,60);
// partie effacé
fill(0,255,255);
stroke(0,255,255);
rect(xPos*2,yPos-5,70,20);
rect(xPos*10,yPos-5,70,20)





// yeux
  stroke(0,0,0);
  fill(0,0,0);
  rect(xPos*3,yPos*4,40,3);
  rect(xPos*3.2,yPos*4.2,10,8);

  rect(xPos*11,yPos*4,40,3);
  rect(xPos*11.2,yPos*4.2,10,8);


// montant lunette
  stroke(0,0,255);
  fill(0,0,255);
  rect(xPos*8,yPos*1.5,25,4);
  rect(xPos*2,yPos*2,60,4);
  rect(xPos*10,yPos*2,60,4);
  rect(xPos*2,yPos*2.5,4,8);
  rect(xPos*8,yPos*2.5,4,8);
  rect(xPos*10,yPos*2.5,4,8);
  rect(xPos*16,yPos*2.5,4,8);

// bouche
rect(xPos*3,yPos*10,120,15);

fill(255,255,255);
stroke(255,255,255);
rect(xPos*4,yPos*10.3,100,3);

// NOSE
stroke(0,0,0);
line(xPos*10,yPos*8,xPos*8,yPos*6);
line(xPos*10,yPos*6,xPos*8,yPos*8);

//pieds
fill(0,0,255);
rect(xPos,yPos*36,50,20);
rect(xPos*13,yPos*36,50,20);






  //line(20%W,30%H,10,10);
  //line(60%W,30%H,10,10);

  //ellipse(10*H/100,10*H/100,d,d);

}
