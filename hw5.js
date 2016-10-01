function setup() {
  createCanvas(300, 300);
  background(255);

  var i =1;
  while (i  < 4) {
          stroke(0);
rect(50-10*i,50-10*i,20*i,20*i);
rect(150-10*i,50-10*i,20*i,20*i);
rect(250-10*i,50-10*i,20*i,20*i);
noFill();


   i= i+1;
   } 
}
