class Node {
  constructor(position, next = null) {
    if (!(position instanceof Vector2)) {
      print("Invalid Position");
    }

    this.position = position;
    this.next = next;
  }

  getPosition() {
    return this.position;
  }

  getNext() {
    return this.next;
  }

  setPosition(newPositiong) {
    this.position = newPosition;
  }

  setNext(newNext) {
    this.next = newNext;
  }
}