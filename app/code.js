/* globals $*/
var spherePosition = $("#bouncing-ball").attr("position");

// Listen for keyup events
document.addEventListener("keyup", function(event){
    
  // Move the ball up
  if(event.keyCode === 32){
    spherePosition.y += 2.5;
    
    setTimeout(function(){
      // do stuff after time has passed
      console.log("a second has passed!");
      spherePosition.y += 2;
      
    }, 200);
    

    setTimeout(function(){
      // do stuff after time has passed
      console.log("another moment has passed!");
      spherePosition.y += 1;
      
    }, 200);
    
   
    
    
    
    
    
    //part where ball goes down
    
    setTimeout(function(){
      // do stuff after time has passed
      console.log("another moment has passed!");
      spherePosition.y -= 2;
      
    }, 200);
    
    
     
    setTimeout(function(){
      // do stuff after time has passed
      console.log("another moment has passed!");
      spherePosition.y -= 2.5;
      
    }, 200);
    
    
    
     
    setTimeout(function(){
      // do stuff after time has passed
      console.log("another moment has passed!");
      spherePosition.y -= 1;
      
    }, 200);
  }
  
  // Move the ball down

  
  
});