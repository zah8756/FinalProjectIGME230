//  var playPause=anime({
//     targets:'div.cup.left',
//     translateY: [
//         { value: 200, duration: 500 },
//         { value: 0, duration: 800 }
//       ],
//       rotate:{
//         value:'1turn',
//         easing:'easeInOutSine'
//       },
//       autoplay:false,
//       loop:true
// });

// var playPause2=anime({
//     targets:'div.cup.center',
//     translateX: [
//         { value: 200, duration: 500, delay:1000 },
//         { value: 0, duration: 800 }
//       ],
//       rotate:{
//         value:'1turn',
//         easing:'easeInOutSine',
//         delay:1000
//       },
//       autoplay:false,
//       loop:true
// });

// var playPause3=anime({
//     targets:'div.cup.right',
//     translateY: [
//         { value: 200, duration: 500, delay:3000 },
//         { value: 0, duration: 800 }
//       ],
//       rotate:{
//         value:'1turn',
//         easing:'easeInOutSine',
//         delay:3000
//       },
//       autoplay:false,
//       loop:true
// });


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


anime({
    targets:'svg.cup.center',
    translateY: [
        { value: -160, duration: 900 ,delay:630,easing:'easeInOutCubic'},
      ],
      //  translateX: [
      //   { value: -160, duration: 900 ,delay:1000,easing:'easeInOutCubic'},
        
      //   // { value: 0, duration: 800 }
      // ],

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
        //       translateX: [
        //  { value: 0, duration: 900 ,delay:300,easing:'easeInOutCubic'},
        
        // // { value: 0, duration: 800 }
        //  ],
       
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


anime({
    targets:'svg.cup.left',
    translateX: [
         
        { value: 224, duration: 600 ,delay:2500, easing:'easeInOutSine'},
        { value: 112, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: 0, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: 112, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        // { value: 0, duration: 800 }
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

anime({
    targets:'svg.cup.right',
    translateX: [
         
        { value: -224, duration: 600 ,delay:2500, easing:'easeInOutSine'},
        { value: 0, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: -112, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: -224, duration: 600 ,delay:1000, easing:'easeInOutSine'},
        { value: 0, duration: 600 ,delay:1000, easing:'easeInOutSine'},
       
        // { value: 0, duration: 800 }
      ],
});


$(document).ready(function(){
  $("svg.cup.left").click(function(){
    // if(isDone==true)
    
        guessLeft()
    
  
  });
});
$(document).ready(function(){
  $("svg.cup.center").click(function(){
    
    
        guessCenter()
    
  });
});
$(document).ready(function(){
  $("svg.cup.right").click(function(){
  //  if(isDone==true)
    
        guessRight()
    
  });
});

$(document).ready(function(){
  $("div.cloth").click(function(){
  //  if(isDone==true)
   reveal()  
  });
});

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



// document.querySelector('#cups .pause').onclick=
// playPause.pause;

var buttonPress=anime({
    autoplay:false,
    targets:'button.answer',
    backgroundColor:'#00ff00',
  })

  document.querySelector('#container .answer').onclick=
  buttonPress.play;