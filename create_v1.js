
// here is my code
var x = 0;
var y = 0;
var r = 0;

createCanvas("canvas1", 320, 450);

// here is a loop that does stuff
for (var i = 0; i < 10; i++) {
  x = randomNumber(1, 320);
  y = randomNumber(1, 450);
  r = randomNumber(1, 50);
  setFillColor(rgb(x,y,r));
  circle(x, y, r);
  
}

for (var i = 0; i < 4; i++) {
  
}
