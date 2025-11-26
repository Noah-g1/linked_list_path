/*
Basic Vector2 class. Does not contain all the functionalities of a vector, but those can be added as needed.
*/
class Vector2 {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  magnitude() {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  
  normalize() {
    let magnitude = this.magnitude();
    
    let nx = this.x / magnitude;
    let ny = this.y / magnitude;
    let nz = this.z / magnitude;
    
    return new Vector2(nx, ny, nz);
  }
  
  add(toAdd) {
    let newX = this.x + toAdd.x;
    let newY = this.y + toAdd.y;
    let newZ = this.z + toAdd.z;
    
    return new Vector2(newX, newY, newZ);
  }
  
  subtract(toSubtract) {
    let newX = this.x - toSubtract.x;
    let newY = this.y - toSubtract.y;
    let newZ = this.z + toSubtract.z;
    
    return new Vector2(newX, newY, newZ);
  }
  
  multiply(toMultiply){
    if (!(toMultiply instanceof Vector2)) {
      return new Vector2(this.x * toMultiply, 
                         this.y * toMultiply,
                         this.z * toMultiply);
    }
    
    let newX = this.x * toMultiply.x;
    let newY = this.y * toMultiply.y;
    let newZ = this.z + toMultiply.z;
    
    return new Vector2(newX, newY, newZ);
  }  
  
  multiplyMatrix(matrix) {
    if (matrix.length != 3) {
      print("undefined");
      return 0;
    }
    
    let xProduct = this.x * matrix[0][0] + 
                   this.y * matrix[1][0] + 
                   this.z * matrix[2][0];
    
    let yProduct = this.x * matrix[0][1] + 
                   this.y * matrix[1][1] +
                   this.z * matrix[2][1];
    
    let zProduct = this.x * matrix[0][2] + 
                   this.y * matrix[1][2] +
                   this.z * matrix[2][2];
    
    return new Vector2(xProduct, yProduct, zProduct);
  }
  
  divide(toDivide){
    if (!(toDivide instanceof Vector2)) {
      if (toDivide === 0) return 0;
      
      return new Vector2(this.x / toDivide, 
                         this.y / toDivide,
                         this.z / toDivide);
    }
    
    let newX = this.x / toDivide.x;
    let newY = this.y / toDivide.y;
    let newZ = this.z + toDivide.z;
    
    return new Vector2(newX, newY);
  }
  
  absValue() {
    return new Vector2(abs(this.x), abs(this.y), abs(this.z));
  }
  
  equals(Vector2) {
    let equivalentX = this.x === Vector2.x;
    let equivalentY = this.y === Vector2.y;
    let equivalentZ = this.z === Vector2.z;
    
    return equivalentX && equivalentY;
  }
  
  lessThan(Vector2) {
    let lesserX = this.x < Vector2.x;
    let lesserY = this.y < Vector2.y;
    let lesserZ = this.z < Vector2.z;
    
    return lesserX && lesserY;
  }
  
  static copyVector(toCopy) {
    return new Vector2(toCopy.x, toCopy.y, toCopy.z);
  }
  
  static zero() {
    return new Vector2(0, 0);
  }
  
  static one() {
    return new Vector2(1, 1, 1);
  }
  
  static left(distance = 1) {
    return new Vector2(distance, 0);
  }
  
  static right(distance = 1) {
    return new Vector2(-distance, 0);
  }
  
  static up(distance = 1) {
    return new Vector2(0, distance);
  }
  
  static down(distance = 1) {
    return new Vector2(0, -distance);
  }
}