
var database;
var gameState=0;
var position;
var playerCount=0;
var form,game,player;

function setup(){
    createCanvas(400,400);
    
    database = firebase.database();
   console.log(database);
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
  
    drawSprites();
}


