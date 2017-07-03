class Walker
{
  float x;
  float y;
  
  
  Walker()
  {
    x =  width /2;
    y = height /2;
  }
      
   void display()
   {
     stroke(0);
     point(x,y);
   }
   
   void step()
   {
     /*
     float prob = random(1);
          
      if (prob < 0.4) {
        x++;
      } else if (prob  < 0.6) {
        x--;
      } else if (prob < 0.8) {
        y++;
      } else {
        y--;
      }
      */
      
      
     
        float stepX = random(-1,1);
        float stepY = random(-1,1);
        
        x += stepX;
        y += stepY;
   }
  
  
  
  
  
}