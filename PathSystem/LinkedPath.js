class LinkedPath {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    display() {
        let current = this.head;
        let previous = null;

        while(current !== null) {
            let position = current.getPosition();

            if (previous !== null) {
                let prevPosition = previous.getPosition();

                line(prevPosition.x, prevPosition.y, position.x, position.y);
            }

            circle(position.x, position.y, 10); 

            previous = current;
            current = current.getNext();
        }
    }

    getHead() {
        return this.head;
    }

    add(position) {
        if (!(position instanceof Vector2) || position === null) {
            throw new Error("Invalid Position");
        }

        let newNode = new Node(position);

        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }

        let current = this.head;
        while (current.getNext() != null) {
            current = current.getNext();
        }

        current.setNext(newNode);
        this.size++;
    }

    clear() {
        let current = this.head;
        while (current != null) {
            let next = current.getNext();
            current.setNext(null);
            current.setData(null);
            current = next;
        }

        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    iterator() {
        return new LinkedPathIterator(this);
    }
}