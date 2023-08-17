class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        const currentValue = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parentValue = this.heap[parentIndex];

            if (currentValue < parentValue) {
                this.heap[index] = parentValue;
                index = parentIndex;
            } else {
                break;
            }
        }

        this.heap[index] = currentValue;
    }

    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return min;
    }

    bubbleDown(index) {
        const currentValue = this.heap[index];
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== index) {
                this.heap[index] = this.heap[smallestIndex];
                index = smallestIndex;
            } else {
                this.heap[index] = currentValue;
                break;
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function generateRegularNumbers(k) {
    const regularNumbers = [];
    const minHeap = new MinHeap();
    const uniqueNumbers = new Set(); // To track unique regular numbers

    minHeap.insert(1);
    uniqueNumbers.add(1);

    while (regularNumbers.length < k) {
        const minValue = minHeap.extractMin();
        for (const prime of [2, 3, 5]) {
            const nextValue = prime * minValue;
            if (!uniqueNumbers.has(nextValue)) {
                uniqueNumbers.add(nextValue);
                minHeap.insert(nextValue);
            }
        }
        regularNumbers.push(minValue);
    }

    return regularNumbers.sort((a, b) => a - b);
}


module.exports = {
    generateRegularNumbers:generateRegularNumbers
}