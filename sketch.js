let mainGrid;

function setup() {
  createCanvas(600, 400);

  mainGrid = new Grid(width % 15, height % 10, 100);
}

function draw() {
  background(20);

  mainGrid.display();
}

function mouseClicked() {
  
}