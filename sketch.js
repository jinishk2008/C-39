var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var carImage1, carImage2, carImage3, carImage4, trackImage;

var finishedPlayer = 0, passedFinishLine;

function preload(){

  carImage1 = loadImage("images/car1.png")
  carImage2 = loadImage("images/car2.png")
  carImage3 = loadImage("images/car3.png")
  carImage4 = loadImage("images/car4.png")
  trackImage = loadImage("images/track.jpg")
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(finishedPlayers === 4){
    game.update(2)
  }
  
  if(finishedPlayers === 4 && gameState === 2){
    game.displayRank();
  }

}
