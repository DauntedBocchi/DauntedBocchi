function setup() {
  createCanvas(1920, 768);
}

function draw() {
  background('lightpink');
  fill(300, 200, 300)
  noStroke(true)
   rect(0, 0, 300, 1920);
  rect(1650, 0, 300, 1920)
}
  let img;

function preload() {
  
  img = loadImage('https://static.wikia.nocookie.net/bocchi-the-rock/images/9/98/Hitori_Gotoh_Character_Design_2.png');  
}

function draw() {
    background('lightpink');
    image(img, 960, 0); 
    fill(300, 200, 300)
  noStroke(true)
   rect(0, 0, 300, 1920);
  rect(1650, 0, 300, 1920)
  stroke(0)
  strokeWeight(20)
  textSize(90)
  text('sorry, there is', 400, 300)
  stroke(0)
  strokeWeight(20)
  textSize(90)
  text('nothing here', 400, 400)
  
}
