class LinkedPathIterator {
    constructor(linkedPath) {
        if (linkedPath == null) {
            print("Invalid Path");
        }

        this.next = linkedPath.getHead();
    }

    hasNext() {
        return this.next != null;
    }

    next() {
        if (!this.hasNext()) {
            print("No next");
        }

        let data = this.next.getData();
        this.next = this.next.getNext();

        return data;
    }
}