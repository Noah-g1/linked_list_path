let mainGrid;
let path;

let cellSize = 50;

function setup() {
  createCanvas(600, 400);

  mainGrid = new Grid(width / 15, height / 10, cellSize);
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

function keyPressed() {
  if (key === "p") {
    placePath(path);
  }
}

function placePath(path) {
  let iterator = path.iterator();

  let previous = null;
  while(iterator.hasNext()) {
    let current = iterator.next();

    if (previous === null) {
      mainGrid.getCell(current.x, current.y).placeObject();

      previous = current;
      continue;
    }

    let direction = current.subtract(previous);
    let distance = direction.magnitude();
    let normal = direction.normalize();

    let numSteps = (distance / cellSize) * 2;
    for (let i = 0; i < numSteps; i++) {
      let step = normal.multiply((cellSize / 2) * i);

      let toCheck = previous.add(step);
      let cell = mainGrid.getCell(toCheck.x, toCheck.y)

      if (cell.isFull) continue;

      cell.placeObject();
    }

    mainGrid.getCell(current.x, current.y).placeObject();

    previous = current;
  }
}