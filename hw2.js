function setup() {
  createCanvas(200, 200);
  background(255);

  var i =1;
  while (i < 20) {
          stroke(0);
ellipseMode(CENTER);
ellipse(100,100,10*i,10*i);
   i= i+1;
   noFill();
   } 
}
