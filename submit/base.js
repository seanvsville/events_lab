console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

});

$("submit").submit(function (event) {
  event.preventDefault();
}

);
