function setup() {
  createCanvas(windowWidth,windowHeight);
  loadJSON("data.json",drawData);
  print("///Setting Up///");

}

function draw() {

}

function drawData(data) {
  print(data);
  print("chargé");
  print(data["person2"].age);

  // visualiser age de chaque personnes

  // forme manuelle
  /*
  var d1= data["person2"].age*1;
  ellipse(100,100,d1,d1);
  */


  // forme avec 1 loop
      // key = person1...
      var i = 1 ;

  for(var index in data){
    print(data[index].age);
    // ici il donne tout les ages
    var d2age = data[index].age*1;
    var nom = data[index].name;
    var xpos= 100*i;

    // function debbuger
    // debugger;
    fill(255-xpos,0+xpos,255);
    noStroke();
    ellipse(xpos,100,d2age,d2age);

    fill(0);
    textSize(15);
    text(nom,xpos-20,180);

    i+=1;


  }


}
