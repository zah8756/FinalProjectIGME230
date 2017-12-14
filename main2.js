$(function() {
    $(".shape").draggable();
});
function clickButton(){
    // counter=0;
    // if (counter==0)
    // {
    // counter+=1;
    firstClick()
    
    }
//    else
//     {
//         secondClick()
//     }

// }

function firstClick(){
anime({
    targets:'#end',
    translateX:{value:-340},
    translateY:{value:-350},
    width:700,
    height:700,
    backgroundColor: '#3CFF33'

})
 document.getElementById("end").innerHTML = "You found my second Button!";
}

// function secondClick(){
//     anime({
//             targets:'.end',
//             translateX:{value:-393},
//             translateY:{value:-400},
//             backgroundColor:'green',
//         })
// }