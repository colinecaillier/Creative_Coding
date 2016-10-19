
var words =["in","the","beginning","there","was","the","word"," !"]
var words2 =["hola","ciao","today","there","was","riaviolis","day"," !"]

var outputText="";


function setup() {
  print(words);
  createCanvas(windowWidth,windowHeight);
  frameRate(5);

}

function draw() {
  background(255);
  textSize(35);
  //text(words[0],100,100);

// shuffle = melanger
  shuffle(words, true);


  for( var i= 0; i < words.length; i++){

      text(words[i], 100, 100 + i*40);

  }



  for( var i= 0; i < words2.length; i++){
    textSize(20);
    outputText += words2[i]+" ";

    }
    text(outputText,200,200);
    outputText = "";


}


function mousePressed(){
  print("ici");


    text(outputText,200+k*40,200);
    shuffle(words2, true);

}
