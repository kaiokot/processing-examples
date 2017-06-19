PImage img;

void setup()
{
  size(960,720);
  img = loadImage("bella.jpg");
}

void draw(){
  
  float x = random(width);
  float y = random(height);  
  color c  = img.get(int(x),int(y)); 

  float diameter= random(2,16);
  
  noStroke();
  fill(c);
  ellipse(x,y,diameter,diameter);
  
  // adding image preview
  image(img, 0 ,0 , width / 5 , height /5);
}