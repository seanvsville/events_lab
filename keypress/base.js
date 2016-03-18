console.log("Sanity Check: JS is working!");

$(document).ready(function(){

});

// Challenge: Stop watch. When the user hits spacebar, record their "start"
// time. When they hit it again, record their "end" time. Then, calculate
// the total time, and put it on the page.

// Listen for spacebar
// Record time of spacebar press 2x
// Add times together and display


// I need to create a function to display the start time, and create functions like event.timeStamp1
// and even.timeStamp2, and a last function to calculate total time by subtracting timeStamp1 from
// timeStamp2. I would also translate millimeter time to secs. I just didn't have enough time to
// continue working on this.
//(document).keypress(function startTime(event1) {
  //$("h2").text("Start-time: ");
//});

    //$(document).keypress(function stopTime(event2) {
      //$("h2").append("<span> " + "Stop-time: " + event.timeStamp + "</span>");
    //});

      //$(document).keypress(function totalTime(event3) {
        //$("h2").append("<span> " + "Total-time: " + event.timeStamp + "</span>");
      //});
$(document).ready(function() {

var spaceBarPresses = 0;
var startTime = 0;

$(window).keyup(function(e) {

if (e.keyCode === 32 && spaceBarPresses % 2 === 0) {

  $("#total-time").text("00:00 - Time is ticking!");
  startTime = Date.now();
  spaceBarPresses += 1;
}

else if (e.keyCode === 32 && spaceBarPresses % 2 !== 0) {

  endTime  = Date.now();
  $("#total-time").text((endTime - startTime)/1000 + " seconds");
  spaceBarPresses += 1;

  }

});

$(".reset").on("click", function() {
  $("#total-time").text("00:00");
  spaceBarPresses = 0;
  startTime = 0;

  });

});
