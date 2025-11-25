class Node {
  constructor(position, next = null) {
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