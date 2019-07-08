var Queue = function () {

    this.count = 0;
    this.storage = []

    this.enqueue = function (value) {
        this.storage[this.count] = value
        this.count++;
    }

    this.dequeue = function () {
        this.count--;
        return this.storage.shift()
    }

    this.display = function () {
        console.log(this.storage)
    }

    this.front = function () {
        if (this.storage.length === 0) {
            return "Top is null"
        } else {
            return this.storage[0]
        }
    }

    this.size = function () {
        return this.storage.length;
    }

    this.isEmpty = function () {
        return this.storage.length === 0
    }
}

var myqueue = new Queue()
myqueue.enqueue(11);
myqueue.enqueue(15);
myqueue.display();
myqueue.enqueue(12);
myqueue.display();
myqueue.enqueue(35);
myqueue.display();
console.log("Deleted value is: " + myqueue.dequeue())
myqueue.display();
console.log(myqueue.front())
console.log("Size is: " + myqueue.size())
console.log(myqueue.isEmpty())