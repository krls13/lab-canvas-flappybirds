window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var frame = 0

  function startGame() {

    setInterval(function() {
      if (frame == 801){
        frame = 0
      }
      drawBackground()
      frame += 1
    }, 10)
    
  }

  function drawBackground(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var background1 = new Image();   // Create new background element
    background1.src = 'images/bg.png'; // Set source path

    var background2 = new Image();   // Create new background element
    background2.src = 'images/bg.png'; // Set source path

    ctx.clearRect(0, 0, 800, 550);
    ctx.drawImage(background1, frame, 0);
    ctx.drawImage(background2, frame - 800, 0);

    console.log("hola")
  }

};