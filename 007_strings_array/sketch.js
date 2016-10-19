
var words =["in","the","beginning","there","was","the","word"," !"]
var words2 =["hola","ciao","today","there","was","riaviolis","day"," !"]

var outputText="";
var offset = 30;
var counter = 0;


function setup() {
  print(words);
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  textSize(35);



}

function draw() {
  //background(255);
  //text(words[0],100,100);

  // shuffle = melanger
  /*shuffle(words, true);


  for( var i= 0; i < words.length; i++){

    text(words[i], 100, 100 + i*40);

  }
*/

/*
  for( var j= 0; j < words2.length; j++){

    textSize(20);
    outputText += words2[j]+" ";

    text(outputText,200,200+offset);
    offset +=40;
    //

  }
  shuffle(words2, true);
  outputText = "";

*/


counter ++;
if (counter %60 ==0){
  print("yeah");
  doPermutations();

}





}
function mousePressed(){
  background(255);
}


function doPermutations(){
  print("ici");
  print(counter);
  shuffle(words, true);
  outputText="";

  for ( var i =0; i<words.length; i+=1){
    outputText = outputText + " " + words[i];

  }
  text(outputText,100,100+offset);
  offset += 40;


}
