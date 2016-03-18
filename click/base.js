//Challenge: Can you create a list of all the phrases that you click?
//Stretch: In addition to listing the phrase I clicked, can you include a timestamp?
// Every time you click something, log it the names of the buttons

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

});

//Listen for span on click event, append to ul a li with text and event stamp.
$("span").on("click", function handleClick(event) {
 $("ul").append("<li> "+ $(this).text() + " at " + event.timeStamp +"</li>");
});
