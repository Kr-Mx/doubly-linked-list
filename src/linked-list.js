const Node = require('./node');

class LinkedList {
    constructor(list) {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
            this.length++;
        } //вставляем узел в начало
        else {
            this.length++;
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } //вставляем узел в хвост
        return this
    }

    head() {
        if (!this._head) return null;
        return this._head.data
    }

    tail() {
        if (!this._tail) return null;
        return this._tail.data
    }

    at(index) {
        let counter = 0;
        let currentNode = this._head;
        while (counter < index) {
            counter++;
            currentNode = currentNode.next;
        } //ищем узел с индексом
        return currentNode.data
    }


    insertAt(index, data) {
        let currentNode = this._head;
        let counter = 0;
        let node = new Node(data);
        if (index === 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } //вставляем узел в начало

        else {
            while (currentNode !== null) {
                counter++;
                currentNode = currentNode.next;
                if (counter === index) {
                    node.prev = currentNode.prev;
                    currentNode.prev.next = node;
                    node.next = currentNode;
                    currentNode.prev = node;
                } //вставляем узел по индексу
            }
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let counter = 0;
        let currentNode = this._head;
        if (this.length === 1) {
            return this.clear();
        } else if (index === 0 && this.length !== 1) {
            return this._head = currentNode.next;
            // удаляем голову
        } else {
            while (currentNode !== null) {
                counter++;
                currentNode = currentNode.next;
                if (counter === index) {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                } // связываем соседние узлы
                else if (currentNode === this._tail) {
                    return this._tail = this._tail.prev;
                    // удаляем хвост
                }
            }
        }
    }
    reverse() {
    }
    indexOf(data) {
        let index = 0;
        let currentNode = this._head;
        while (index < this.length) {
            if (data === currentNode.data) {
                return index
            } else {
                index++;
                currentNode = currentNode.next
            }
        }
        return -1
    }
}

module.exports = LinkedList;
