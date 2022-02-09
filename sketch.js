//original get pixels code via dan shiffman
// https://editor.p5js.org/Jenny-yw/sketches/SlPDJpLM8
let video;

let vid;
let playing = true;

let vScale = 200;
let particles = [];
let slider;
let cSize=1000;//circle size
var bgGraphic;
var bgGraphicCrop;
var scaleSin;
var a = 0;

var cropGraphic;

var startPic;
var maskImage;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  bgGraphic = createGraphics(width,height);  

  vid = createVideo('volc2.mp4');
  vid.size(width/vScale, height/vScale);
  vid.volume(0);
  vid.loop();
  vid.hide(); 

  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle(random(width), random(height), random(2,5));
    
  }
  maskImage = createGraphics(width,height);
  maskImage.ellipse(width/2,height/2,width/1.8,height/1.8);
  background(51);
}


function draw() {

//this section is for the sinwave which drives the scale
  scaleSin=map(sin(a/5),-1,1,.01,1.4) ;
  translate(width/2,height/2)
  scale(scaleSin); 
  
  //this sets the image mode and centers everything
  imageMode(CENTER);
 translate(-width/2,-height/2);

 

//reading video pixels
var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
var index=((py*vid.width)+px)*4;
 vid.loadPixels();
 
 //taking from length
 for(var i = 0; i < particles.length; i++) {
    
    particles[i].update();
    particles[i].show();
    
  }


  bgGraphicCrop=bgGraphic.get();
  bgGraphicCrop.mask(maskImage);
//large rectangle image
  image(bgGraphic, width/2,height/2,width,height);
  //rotated circle
  push();
  translate(width/2,height/2);
  scale(1);
  rotate(a);
  imageMode(CENTER);
blendMode(LIGHTEST);
image(bgGraphicCrop,0,0,width,width);
pop();
a = a + 0.01

}
function keyPressed() {

  // If you hit the s key, save an image
  if (key == 's') {
    save("mySketch.png");
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}