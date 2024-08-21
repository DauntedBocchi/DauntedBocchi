function setup() {
  createCanvas(1920, 798);
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
  
  img = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7bced49-73a3-43c1-b3ce-fe419a596a72/dh8sr6n-0742dc19-c309-46fc-af13-099ba72ae3ed.png/v1/fill/w_970,h_824/hitori_gotoh_bocchi_the_rock_render_png_by_marcopolo157_dh8sr6n-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAzNSIsInBhdGgiOiJcL2ZcL2M3YmNlZDQ5LTczYTMtNDNjMS1iM2NlLWZlNDE5YTU5NmE3MlwvZGg4c3I2bi0wNzQyZGMxOS1jMzA5LTQ2ZmMtYWYxMy0wOTliYTcyYWUzZWQucG5nIiwid2lkdGgiOiI8PTIzOTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pPcpECtz39W7RTDHaG7oiiwiu_mFXP3NnSpICStC6_E'); 
}

function draw() {
    background('lightpink');
    image(img, 960, 0); 
    fill(300, 200, 300)
  noStroke(true)
   rect(0, 0, 300, 1920);
  rect(1650, 0, 300, 1920)
  stroke("pink")
  strokeWeight(20)
  textSize(90)
  text('sorry, there is', 400, 300)
  stroke("pink")
  strokeWeight(20)
  textSize(90)
  text('nothing here', 400, 400)
  
}
