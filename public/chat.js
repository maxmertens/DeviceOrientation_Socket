
// x,y,z values
var alpha, beta, gamma;

// Make connection
var socket = io();

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


// Listen for events
socket.on('chat', function(data){
    document.getElementById("alpha").innerHTML = "<p>" + Math.round(data.alpha) + "</p>";
    document.getElementById("beta").innerHTML = "<p>" + Math.round(data.beta) + "</p>";
    document.getElementById("gamma").innerHTML = "<p>" + Math.round(data.gamma) + "</p>";

    console.log("on");
});
