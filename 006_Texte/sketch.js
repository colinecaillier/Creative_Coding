var text1 ="this is";
var text2 ="so";
var text3 ="mindblowing!";

var words =["Ce","crocodile","vert","mange","un","poulet","roux","chantant"];


function setup() {
  createCanvas(windowWidth,windowHeight);



}

function draw() {
  background(255);
  //print(text1, text2, text3);

  textSize(30);
  /*text(text1,50,100);
  text(text2,50, 200);
  text(text3,50,300);


  var phrase = text1 +" " +text2 + " "+ text3;

  text(phrase, 50, 400);
*/
/*  text(words[0],50,500);
  text(words[1],50,550);
  text(words[2],50,600);
  text(words[3],50,650);
  text(words[4],50,700);
  text(words[5],50,750);
  text(words[6],50,800);
  text(words[7],50,850);*/

  for (var i=0; i< words.length; i++){
    //for (var j =0; j<=words.length ; j+50){
      text(words[i], 50, 50+50*i);

    }




}
