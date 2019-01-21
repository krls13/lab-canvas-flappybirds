window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function Player() {
    this.width = 50
    this.height = 50
    this.playerX = 100
    this.playerY = 275
    this.speedX 
    this.speedY
    this.gravity
    this.gravitySpeed
  }
  var obstacle1 = {
    width: 60,
    height: 190,
    x: 800,
    y: 0,
  }
  var obstacle2 = {
    width: 60,
    height: 190,
    x: 800,
    y: 315

  }
  var player = new Player();
  
  var backgroundCoords = 0
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  function startGame() {

    setInterval(function() {
      if (backgroundCoords == -800){
        backgroundCoords = 0
      }
      ctx.clearRect(0, 0, 800, 550);

      drawBackground()
      drawPlayer()
      collision()
      backgroundCoords -= 1
    }, 10)
  }

  function drawBackground(){
    var background1 = new Image();   // Create new background element
    background1.src = 'images/bg.png'; // Set source path

    var background2 = new Image();   // Create new background element
    background2.src = 'images/bg.png'; // Set source path

    var obstacleTop1 = new Image();   // Create new background element
    obstacleTop1.src = 'images/obstacle_top.png'; // Set source path

    var obstacleBottom1 = new Image();   // Create new background element
    obstacleBottom1.src = 'images/obstacle_bottom.png'; // Set source path

    var obstacleTop2 = new Image();   // Create new background element
    obstacleTop2.src = 'images/obstacle_top.png'; // Set source path

    var obstacleBottom2 = new Image();   // Create new background element
    obstacleBottom2.src = 'images/obstacle_bottom.png'; // Set source path

    ctx.drawImage(background1, backgroundCoords + 800, 0);
    ctx.drawImage(obstacleTop1, backgroundCoords + 800, 0, 60, 190);
    ctx.drawImage(obstacleBottom1, backgroundCoords + 800, 315, 60, 190);

    ctx.drawImage(background2, backgroundCoords, 0);
    ctx.drawImage(obstacleTop2, backgroundCoords + 800, 0, 60, 190);
    ctx.drawImage(obstacleBottom2, backgroundCoords + 800, 315, 60, 190);

  }

  function drawPlayer() {
    var player_image = new Image()
    player_image.src= "images/flappy.png"

    ctx.drawImage(player_image, player.playerX, player.playerY, player.width, player.height)
  }
  
  document.addEventListener("keydown", function(e){
    
  if(e.keyCode == 32){
      player.playerY -=8
      console.log("XXX");
    }
  else{ player.playerY +=10
  }

  })
  
  function collision(){
    if (player.playerX + player.width > backgroundCoords + obstacle1.x && player.playerY < obstacle1.y + obstacle1.height){
      console.log("end game");
    }
    
  }
};