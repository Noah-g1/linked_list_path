class LinkedPathIterator {
    constructor(linkedPath) {
        if (linkedPath == null) {
            throw new Error("Invalid Path");
        }

        this.next = linkedPath.getHead();
    }

    hasNext() {
        return this.next !== null;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error("No next");
        }

        let data = this.next.getData();
        this.next = this.next.getNext();

        return data;
    }
}