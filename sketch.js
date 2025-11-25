let mainGrid;
let path;

function setup() {
  createCanvas(600, 400);

  mainGrid = new Grid(width % 15, height % 10, 100);
  path = new LinkedPath();
}

function draw() {
  background(20);

  mainGrid.display();

  path.display();
}

function mouseClicked() {
  path.add(new Vector2(mouseX, mouseY));
}