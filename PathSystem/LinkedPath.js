class LinkedPath {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getHead() {
        return this.head;
    }

    add(position) {
        if (!(position instanceof Vector2) || position === null) {
            print("Invalid Position");
        }

        let newNode = new Node(position);

        if (this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }

        let current = head;
        while (current.getNext() != null) {
            current = current.getNext();
        }

        current.setNext(newNode);
        this.size++;
    }

    clear() {
        let current = this.head;
        while (current.getNext() != null) {
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

    size() {
        return this.size;
    }

    iterator() {
        return new LinkedPathIterator(this);
    }
}