function setup() {
  createCanvas(400, 400);
  background(255);

  var i =1;
  while (i < 21) {
          stroke(0);
line(200-i*5,10*i,200+i*5,10*i);
line(200-i*5,400-10*i,200+i*5,400-10*i);

   i= i+1;
   } 
}
