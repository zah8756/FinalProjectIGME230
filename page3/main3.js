

// function to put the fake ball in the correct position and then make it visible then invisible again 
anime({
  targets:'div.button.fake',
  translateY:[{value:400}],
  duration:10,
 complete:function(){
   anime({
     targets:'div.button.fake',
     opacity:100,
     duration:3300,
     complete:function(){
       anime({
     targets:'div.button.fake',
     opacity:0,
       })
     }
   })

 } 
});

// function that moves the center cup using anime.js. First revealing that there is a ball under the cup while rotating then rotating and descending back into place. THen the cup moves from center to left then to the right and left again where it stops
anime({
    targets:'svg.cup.center',
    translateY: [
        { value: -160, duration: 900 ,delay:630,easing:'easeInOutCubic'},
      ],
      rotate:{
        delay:300,
        value:[0,-20],
        duration:1200,
        easing:'easeInOutSine'
      },
      complete: function() {
        anime({
          targets:'svg.cup.center',
          translateY:[
            {value:0, duration: 800 ,delay:600,easing:'easeInOutCubic'}, 
          ],
           rotate:{
            value:[0],
            delay:30,
            duration:1200,
            easing:'easeInOutSine'
           },
           complete:function()
           {
             anime({
               targets:'svg.cup.center',
               translateX:[
                {value:-112, duration: 800 ,delay:1000,easing:'easeInOutCubic'},
                {value: 112, duration: 800 ,delay:1000,easing:'easeInOutCubic'},
                { value: -112, duration: 600 ,delay:2400, easing:'easeInOutSine'},
              ],
            
            
             })
           }
        })
      },   
});

// A function that moves the left cup during the beginning animation. This function function also gets rid of the invisible wall prevent when the beginning animation is done 
anime({
    targets:'svg.cup.left',
    translateX: [
         
        { value: 224, duration: 600 ,delay:2500, easing:'easeInOutSine'},
        { value: 112, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: 0, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: 112, duration: 600 ,delay:1000, easing:'easeInOutSine'},
      ],
      complete:function()
      {
        anime({
          targets:'div.prevent',
          width:0,
          height:0,
         
         
        })
      }
});

// A function that moves the right cup during the beginning animation.It does this by using anime.js to manipulate the x value of a cup while using an easing to make it look like a natural occurrence 
anime({
    targets:'svg.cup.right',
    translateX: [
         
        { value: -224, duration: 600 ,delay:2500, easing:'easeInOutSine'},
        { value: 0, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: -112, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: -224, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: 0, duration: 600 ,delay:1000, easing:'easeInOutSine'},
      ],
});

// a jquery click function that activates the guess left function when clicked. this function activates by clicking on the left cup after the beginning animation
$(document).ready(function(){
  $("svg.cup.left").click(function(){
        guessLeft()
  });
});
// a jquery click function that activates the guess center function when clicked. this function activates by clicking on the center cup after the beginning animation
$(document).ready(function(){
  $("svg.cup.center").click(function(){
        guessCenter()
  });
});
// a jquery click function that activates the guess right function when clicked. this function activates by clicking on the right cup after the beginning animation
$(document).ready(function(){
  $("svg.cup.right").click(function(){
        guessRight()
  });
});
// a jquery click function that activates the reveal function when clicked. this function activates by clicking on any piece of the table cloth after the beginning animation
$(document).ready(function(){
  $("div.cloth").click(function(){
   reveal()  
  });
});
// this function lifts the left cup and rotates it slightly to reveal that nothing is underneath and then places the cup in its original position
function guessLeft(){
  anime({
  targets:'svg.cup.left',
  translateX:[{value:112}],
  translateY: [
    { value: -160, duration: 900 ,delay:600,easing:'easeInOutCubic'},
  ],
  rotate:{
    delay:300,
    value:[0,-20],
    duration:1200,
    easing:'easeInOutSine'
  },
  complete: function() {
    anime({
      targets:'svg.cup.left',
      translateX:[{value:112}],
      translateY:[
        {value:0, duration: 800 ,delay:600,easing:'easeInOutCubic'}, 
      ],
       rotate:{
        delay:30,
        value:[0],
        duration:1200,
        easing:'easeInOutSine'
       }
      });
    }
});
}
// this function lifts the center cup and rotates it slightly to reveal that nothing is underneath and then places the cup in its original position
function guessCenter(){
  anime({
  targets:'svg.cup.center',
  translateX:[{value:-112}],
  translateY: [
    { value: -160, duration: 900 ,delay:600,easing:'easeInOutCubic'},
  ],
  rotate:{
    delay:300,
    value:[0,-20],
    duration:1200,
    easing:'easeInOutSine'
  },
  complete: function() {
    anime({
      targets:'svg.cup.center',
      translateX:[{value:-112}],
      translateY:[
        {value:0, duration: 800 ,delay:600,easing:'easeInOutCubic'}, 
      ],
       rotate:{
        delay:30,
        value:[0],
        duration:1200,
        easing:'easeInOutSine'
       }
      });
    }
});
}
// this function lifts the right cup and rotates it slightly to reveal that nothing is underneath and then places the cup in its original position
function guessRight(){
  anime({
  targets:'svg.cup.right',
  translateX:[{value:0}],
  translateY: [
    { value: -160, duration: 900 ,delay:600,easing:'easeInOutCubic'},
  ],
  rotate:{
    delay:300,
    value:[0,-20],
    duration:1200,
    easing:'easeInOutSine'
  },
  complete: function() {
    anime({
      targets:'svg.cup.right',
      translateX:[{value:0}],
      translateY:[
        {value:0, duration: 800 ,delay:600,easing:'easeInOutCubic'}, 
      ],
       rotate:{
        delay:30,
        value:[0],
        duration:1200,
        easing:'easeInOutSine'
       }
      });
    }
});
}
// this function moves all of the table cloth out of the way to reveal the real button was under the table from the beginning 
function reveal(){
  anime({
    targets:'div.cloth.leftLeft',
     translateX:[{value:-50,duration:800,easing:'easeInOutSine'}]
  });

  anime({
    targets:'div.cloth.leftCenter',
    translateX:[{value:-100,duration:800,delay:260,easing:'easeInOutSine'}],
    
  });
  anime({
       targets:'div.cloth.leftRight',
    translateX:[{value:-140,duration:800,delay:340,easing:'easeInOutSine'}],
    
  })
   anime({
    targets:'div.cloth.rightRight',
     translateX:[{value:48,duration:800,easing:'easeInOutSine'}]
  });

  anime({
    targets:'div.cloth.rightCenter',
    translateX:[{value:98,duration:800,delay:260,easing:'easeInOutSine'}],
    
  });
  anime({
       targets:'div.cloth.rightLeft',
    translateX:[{value:138,duration:800,delay:340,easing:'easeInOutSine'}],
    
  })
}



// this anime function changes the color of button.answer 
var buttonPress=anime({
    autoplay:false,
    targets:'button.answer',
    backgroundColor:'#00ff00',
    easing:'easeInOutCubic',
  })
//this query selector plays the anime function above when button.answer is clicked
  document.querySelector('#container .answer').onclick=
  buttonPress.play;