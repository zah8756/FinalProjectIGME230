// creates a counter variable
let counter = 0;

// creates a jquery click function that first checks counter then which each subsequent press of the dot a different function is activated and the counter is increased
$(document).ready(function(){
    $("div.circle").click(function(){
    if(counter==0)
    {
        firstClick()  
        counter++;
    }
    else if(counter==1)
    {
        secondClick()
        counter++;
    }
    else if(counter==2)
    {
        thirdClick()
        counter++;
    }
    else if(counter>=3)
    {
        lastClick()
        // when the button is clicked a last time the text on screen changes to "you found my button"
        document.getElementById("find").innerHTML = "You Found my Button";
    }
    
    });
  });
// this function translate the circle up down and then back to its starting position. This happens with the first click
  function firstClick(){
      anime({
    targets:'div.circle',
    translateX: [
        { value: 20, duration: 500,delay:60,easing:'easeInOutCubic'},
        { value: -20, duration: 800,delay:60, easing:'easeInOutCubic'},
        { value: 0, duration: 800,delay:60,easing:'easeInOutCubic'}
      ],
     
    });
}  
// with the second click function the dot is translated right then left and then again back to the center
function secondClick(){
    anime({
  targets:'div.circle',
  translateY: [
      { value: 20, duration: 500,delay:60,easing:'easeInOutCubic'},
      { value: -20, duration: 800,delay:60, easing:'easeInOutCubic'},
      { value: 0, duration: 800,delay:60,easing:'easeInOutCubic'}
    ],
   
  });
}
// with the third click function we use an anime.js function to translate the ball  down near the bottom of the page. while it is moving the ball also changes size and color to become the button we were searching for
function thirdClick(){
    anime({
  targets:'div.circle',
  translateY: [
      { value: 320, duration: 800,delay:60, easing:'easeInOutCubic'}
    ],
    translateX: [
        { value: -20, duration: 800,delay:60, easing:'easeInOutCubic'}
      ],
    easing:'easeInOutCubic',
    delay:300,
    width:80,
    height:80,
    backgroundColor:'#FF0000',
    
   
  });
}
// with the last click function we use an anime.js functions to change the buttons color while at te same time remove the invisible box because it is no longer hiding the invisible I dot
function lastClick(){

            anime({
                targets:'div.circle',
                translateY: [
                  { value: 320, duration: 800,delay:60, easing:'easeInOutCubic'}
                ],
                  easing:'easeInOutCubic',
                  delay:300,
                  backgroundColor:'#00FF00',   
            });
            anime({
                targets:'div.invis',
                width:0,
                height:0,
                opacity:0,
              })
            
}
