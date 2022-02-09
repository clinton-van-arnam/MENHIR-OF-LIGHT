


function Particle(x, y) {
  this.x = x;
  this.y = y;
  let n=0;
  let nSpeed=.001;
let noisePosition=0;

  let xspeed=5;
  let yspeed=random(1,6);
  let rspeed=random(1,6);
  let alpha=30;

  this.update = function() {
    this.x += xspeed;
    this.y += yspeed;
    this.r +=rspeed;

    n+=nSpeed;
    noisePosition=  map(noise(n),0,1,-10,20);
    if (this.x > width  || this.x < 0) {
      xspeed = -xspeed;
    }
    if (this.y > height  || this.y < 0) {
      yspeed = -yspeed;
    }

    if (this.r > 1000  || this.r < -5) {
      rspeed = -rspeed;
    }
    this.x = constrain(this.x, 0, width);    
    this.y = constrain(this.y, 0, height);    
  }
  
  this.show = function() {
   
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    
    var index=((py*vid.width)+px)*4;
    let r= vid.pixels[index];
    let g= vid.pixels[index+1];
    let b= vid.pixels[index+2];
    
    if(r != null){
    bgGraphic.stroke(r, g, b,50);
    bgGraphic.strokeWeight(random(1,3));
    bgGraphic.noFill();   }
    bgGraphic.line(0,this.y,width,this.y);}
 
  
}