let radio = 0;
let counterIn = 0;
let counterTot = 0;
let piCalc = 0;

function setup() {
  createCanvas(windowWidth / 2, windowWidth / 2);
  background(0);
  radio = width / 2;
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(0, 0, 2 * radio, 2 * radio);
  rectMode(CENTER);
  rect(0, 0, 2 * radio, 2 * radio);
}

function draw() {
  translate(width / 2, height / 2);
  for (var i = 0; i <= 10; i++) {
    let x = random(-radio, radio);
    let y = random(-radio, radio);
    if (dist(x, y, 0, 0) > radio) {
      stroke(255, 0, 0)
      point(x, y);
      counterTot += 1;
    } else {
      stroke(0, 255, 0);
      point(x, y);
      counterTot += 1;
      counterIn += 1;
    }
    if (counterTot != 0) {
      piCalc = 4 * float((counterIn) / counterTot);
      updateText();

    }
  }
}

function updateText() {
  select("#picalc").html(piCalc);
  //let pitext = selectAll('#picalc');
  //pitext.html(piCalc);
}