class Grid {
  constructor(numCols, numRows, cellSize) {
    this.numCols = numCols;
    this.numRows = numRows;
    this.cellSize = cellSize;
    
    this.numCells = numCols * numRows;
    this.cells = [];
    for (let i = 0; i < this.numCells; i++) {
      this.cells.push(new Cell());
    }
  }

  display() {
    for (let i = 0; i < this.numCells; i++) {
      if (!this.cells[i].isFull) continue;
      
      let x = floor(i % this.numCols) * this.cellSize;
      let y = floor(i / this.numCols) * this.cellSize;
      
      push();
      fill(220);
      square(x, y, this.cellSize);
      pop();
    }
  }
  
  getCell(x, y) {
    return this.cells[this.getIndex(x, y)];
  }
  
  getIndex(x, y) {
    let xIndex = floor(x / this.cellSize);
    let yIndex = floor(y / this.cellSize);

    return yIndex * this.numCols + xIndex;
  }
}