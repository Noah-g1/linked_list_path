class LinkedPathIterator {
    constructor(linkedPath) {
        if (linkedPath == null) {
            throw new Error("Invalid Path");
        }

        this.nextNode = linkedPath.getHead();
    }

    hasNext() {
        return this.nextNode !== null;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error("No next");
        }

        let position = this.nextNode.getPosition();
        this.nextNode = this.nextNode.getNext();

        return position;
    }
}