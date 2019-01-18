window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    drawBackground()
  }

  function drawBackground(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var background = new Image();   // Create new background element
    background.src = 'images/bg.png'; // Set source path

    ctx.drawImage(background, 0, 0);
  }
};