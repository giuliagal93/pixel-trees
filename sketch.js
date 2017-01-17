function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(1);
  noStroke(0);

  
}

var value = 0;
var direction = 0;
var a = 0;
var b = 0;

var anno = 2017;

function draw() {
    
     
    for(var x=0;x<width;x+=5){
    for(var y=0;y<height;y+=5){
      
        if ( b>= 0){
      if(random()<(b+1)/100){
        fill(100,200,100);
      }
      if(random()<(b+1)/100){
        fill(200,250,100);
      }
      if(random()<(b+1)/100){
        fill(51,158,50);
      }
        
        } else {
            
     if(random()<abs((b+1)/100)){

         fill(51,158,50); 
         
      }
     
    if(random()<abs((b+1)/100)){
        
       fill(100,200,100);  

      }
            
      if(random()<abs((b+1)/100)){
                               
          fill(200,250,100);

      }
        }
        

  
  //80% alberi
    
    rect(x,y,5,5);  
      
    }
  }
    
        // RETTANGOLO IN cima

   
        fill(230);
    rect(0,0,width, 50);
    
    // RETTANGOLO IN FONDO
    // FILL VARIA CON LA B
    colorMode(HSB);
    fill(100+b,35,75);
    rect(0,height-(height/8),width,height/8)
    
    colorMode(RGB);
    
    var tempo = anno - b*5;
    
    /*if (tempo > 2400) {
        tempo = 2400;
    }*/
    
    fill(0);
    textSize(14);
    textFont("Montserrat");
    textAlign(CENTER);
    text(tempo,width/2,7.5*height/8+4)

}

function touchStarted() {
  value = touchX;
}

function touchMoved() {
    
    if (touchY>(7*height)/8){
  direction = touchX - value;
  console.log(value)
  if(direction > 0) {
  b = a + 1
  } else {
  b = a - 1
  b = a - 1

    
  }
  a = b;
  
  console.log(b);
  value = touchX;
  
   }
}


/*function windowResize(){
  resizeCanvas(windowWidth,windowHeight)
  };*/



/*
function setup(){
  background(0);
  bottone = createButton('click me');
  bottone.position(400,400);
  bottone.mousePressed(changeBG);
}

function changeBG() {
  var val=random(255);
  background(val);
}
*/