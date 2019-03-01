/* globals $ CANNON*/
var spherePosition = $("#bouncing-ball").attr("position");

// Listen for keyup events
document.addEventListener("keyup", function(event){
     
  // Move the ball up
  if(event.keyCode === 32){
    spherePosition.y += 2.5;
    
    $("#bouncing-ball")[0].body.applyImpulse(
      new CANNON.Vec3(10, 50, 0),new CANNON.Vec3()
      .copy($("#bouncing-ball").attr("position")));
  }

  // Move the box forward
  if(event.keyCode === 73){
    $("#bouncing-ball")[0].body.applyImpulse(
      new CANNON.Vec3(0, 50, 0),new CANNON.Vec3()
      .copy($("#bouncing-ball").attr("position")));
  }
  
  // Move the box backward k
  if(event.keyCode === 75){
    $("#bouncing-ball")[0].body.applyImpulse(
      new CANNON.Vec3(0, -50, 0),new CANNON.Vec3()
      .copy($("#bouncing-ball").attr("position")));
  }
  
  // Move the box to the left j
  if(event.keyCode === 74){
     $("#bouncing-ball")[0].body.applyImpulse(
      new CANNON.Vec3(-50, 0, 0),new CANNON.Vec3()
      .copy($("#bouncing-ball").attr("position")));

  }
  
  // Move box to the right l
  if(event.keyCode === 76){
    $("#bouncing-ball")[0].body.applyImpulse(
      new CANNON.Vec3(50, 0, 0),new CANNON.Vec3()
      .copy($("#bouncing-ball").attr("position")));

  }

  // Move box up
   if(event.keyCode === 79){
    spherePosition.y += 1;
  }
  
  // Move box down u
   if(event.keyCode === 85){
    spherePosition.y -= 1;
  }
  
  console.log(event.keyCode);

});