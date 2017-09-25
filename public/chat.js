var alpha,
    beta,
    gamma;

// Make connection
var socket = io();

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');


$(function() {
  if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", process, false);
  } else {
  }
});

function process(event) {
  alpha = event.alpha;
  beta = event.beta;
  gamma = event.gamma;

  $(function() {
    socket.emit('chat', {
        alpha: alpha,
        beta: beta,
        gamma: gamma
    });
    console.log("emit");
  });
}

// // Emit events
// $('#send').on('touchstart click', function(){
//   socket.emit('chat', {
//       alpha: alpha,
//       beta: beta,
//       gamma: gamma
//   });
//   console.log("emit");
// });


// Listen for events
socket.on('chat', function(data){
    document.getElementById("log").innerHTML = "<ul><li>Alpha : " + data.alpha + "</li><li>Beta : " + data.beta + "</li><li>Gamma : " + data.gamma + "</li></ul>";

    console.log("on");
});




//
// $(function() {
//   if(window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", process, false);
//   } else {
//   }
// });
//
// function process(event) {
//   var alpha = event.alpha;
//   var beta = event.beta;
//   var gamma = event.gamma;
//   // document.getElementById("log").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>";
//
//   console.log("hello");
// }
