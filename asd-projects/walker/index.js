/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  let walker = {
    xcord: 0,
    ycord: 0,
    xspeed: 0,
    yspeed: 0,
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp); //detects when arrow keys are lifted
  const KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem();
    wallCollision();
    repositionGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
      if (event.which === KEY.RIGHT) {
        walker.xspeed = 5;
      } 
      if (event.which === KEY.LEFT){
        walker.xspeed = -5;
      } 
      if (event.which === KEY.UP){
        walker.yspeed = -5;
      } 
      if (event.which === KEY.DOWN) {
        walker.yspeed = 5
    }
    console.log()
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function repositionGameItem(){
    walker.xcord += walker.xspeed;
    walker.ycord += walker.yspeed;
    
  }
//moves box right
  function redrawGameItem(){
    $("#walker").css("top", walker.ycord);
    $("#walker").css("left", walker.xcord);
  }

  function handleKeyUp(){
    walker.xspeed = 0;
    walker.yspeed = 0;
    
  }

  function wallCollision(){
    let maxx = $("#board").width();
    let maxy = $("#board").height();
    if (walker.xcord >= maxx){
      walker.xcord = walker.xcord - 4
    } else if (walker.xcord <= 0){
      walker.xcord = walker.xcord - 4
    } else if (walker.ycord >= maxy){
      
    } else if (walker.ycord <= 0){

    }
  }
  //resets speeds to zero when key released
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
