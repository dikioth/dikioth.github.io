// TOTAL BEES FOR THE GAME
var totalBees = 50;

// variables needed for the program
var grid;
var cols;
var rows;
var w = 20; // Width of the cell
var gameStarted = false;
var timeCounter = 0;
// function for making a 2D array
function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

// -- Mouse press func
function mousePressed(){
  for(var i=0;i < cols; i++){
    for(var j=0; j < rows; j++){
      var cell = grid[i][j];
      if (cell.contains(mouseX, mouseY)){
        cell.reveal();
      }
    }
  }
  if (!gameStarted){
    gameStarted = true;
  }
}


// -- END Mouse press func



// SETUP FUNC
function setup() {
  var canvas = createCanvas(401,401);
  canvas.parent('sketch-holder');

  cols = Math.ceil(width/w);
  rows = Math.ceil(width/w);

  grid = make2DArray(cols,rows);

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j] = new Cell(i, j, w);
    }
  }

  // randomizing number of bees
  for (var numBees=0; numBees < totalBees; numBees++){
    indexCols = floor(random(0,cols));
    indexRows = floor(random(0,rows));
    grid[indexCols][indexRows].bee = true;
  }

  // timer
  var timer = select('#timer');
  setInterval(function() {
    if(gameStarted){
      var timeMin = nf(floor(timeCounter/60),2);
      var timeSec = nf(timeCounter%60,2);
    timeCounter++;
    timer.html(timeMin+ ':' + timeSec);
  }
}, 1000);
}

// END SETUP FUNC

function draw() {
  background(0);
  for(var i=0;i < cols; i++){
    for(var j=0; j < rows; j++){
      grid[i][j].countNeighbors();
      grid[i][j].show();
      grid[i][j].followMouse(mouseX,mouseY);
    }
  }
}
