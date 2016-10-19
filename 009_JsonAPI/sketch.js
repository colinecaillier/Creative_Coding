function setup() {
  createCanvas(windowWidth,windowHeight);

  var searchWorld="election";
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?';
  url += "api-key=e9a8db4890d246ba87524f190fde1c2d";
  url +=   "&q=" + searchWorld;

  print(url);
  loadJSON(url,drawData);



}

function draw() {


}

function drawData(data) {
  print(data.response.docs);
  var articles = data.response.docs;

for( var i=0; i<articles.length ; i++ ){
  var snippet= articles[i].snippet;
  textSize(10);
  print(snippet)
  text(snippet, 10, 30+i*40);


}


}
