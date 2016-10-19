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
}
