// sets all of the .shape objects to become draggable using the jquery .draggable function
$(function() {
    $(".shape").draggable();
});
// creates a function to activate when a button is clicked called in the html file 
function clickButton(){
    firstClick()
}
// when activated it makes the end button grow in size and translates it so that it sill stays inside of the background.
//As it is changing size the the buttons inner text is changed to say "you found my second button".The button also changes to the color green while it changing size
function firstClick(){
anime({
    targets:'#end',
    translateX:{value:-340},
    translateY:{value:-350},
    width:700,
    height:700,
    backgroundColor: '#3CFF33',


})
 document.getElementById("end").innerHTML = "You found my second Button!";
}

