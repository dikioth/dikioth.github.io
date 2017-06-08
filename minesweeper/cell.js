function Cell(i,j,w){
  this.i = i;
  this.j = j;
  this.x = i*w;
  this.y = j*w;
  this.w = w;
  this.granneCount = 0;
  this.bee = false;
  this.revealed = false;
}

Cell.prototype.show = function(){
  stroke(0);
  fill(255);
  rect(this.x, this.y, this.w, this.w);

  if (this.revealed){
    if (this.bee){
      ellipse(this.x+this.w*0.5,this.y+this.w*0.5,this.w*0.5);
    }
    else{
      stroke(0)
      fill(200);
      rect(this.x, this.y, this.w, this.w);
      textAlign(CENTER,CENTER);
      fill(0);
      colors = ['black', 'blue','green','yellow','orange','red','red','red']
      for (var i = 0; i < 8; i++){
        if(this.granneCount == i){
          noStroke()
          fill(colors[i]);
          text(this.granneCount, this.x+this.w*0.5, this.y +this.w*0.5);
        }
      }
    }
  }

}


Cell.prototype.contains = function(x,y){
  if (x > this.x && x < this.x + this.w){
    if(y > this.y && y < this.y + this.w){
      return true;
    }
  }
}

Cell.prototype.reveal = function(){
  if (this.granneCount == 0){
    this.revealed = true;
    for (var i=-1; i<=1; i++){
      for (var j=-1; j<=1; j++){
        var xoff = this.i + i;
        var yoff = this.j + j;
        var granne = grid[xoff][yoff];
        granne.revealed = true;
      }
    }
  }
  else{
    this.revealed = true;
  }
}

Cell.prototype.countNeighbors = function(){
  var antalGrannar = 0;

  for (var i=-1; i<=1; i++){
    for (var j=-1; j<=1; j++){
      var xoff = this.i + i;
      var yoff = this.j + j;
      if (xoff > -1 &&  xoff < cols && yoff > -1 && yoff < rows){
      var granne = grid[xoff][yoff];
      if(granne.bee){
        antalGrannar++;
      }
    }
    }
  }
  this.granneCount =  antalGrannar;
}

Cell.prototype.followMouse = function (mounseX,mouseY) {
  if (!this.revealed){
    if (mouseX > this.x && mouseX < this.x + this.w){
      if (mouseY > this.y && mouseY < this.y+w){
        stroke(0)
        fill(200);
        rect(this.x, this.y, this.w, this.w,2);
      }
    }
  }
};
