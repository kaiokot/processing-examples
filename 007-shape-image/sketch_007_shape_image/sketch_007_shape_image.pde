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

  float diameter= random(8,32);
  
  noStroke();
  fill(c);
  ellipse(x,y,diameter,diameter);
}