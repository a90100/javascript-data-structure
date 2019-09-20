class QueueNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor() {
    this.front = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.front === null
  }

  enqueue(value) {
    this.size++
    let node = new QueueNode(value)
    if (this.isEmpty()) {
      this.front = node
      this.tail = node
    } else {
      // 讓尾巴節點先指向node新節點
      this.tail.next = node
      // 讓新節點變成新的尾巴節點
      this.tail = node
    }
  }

  dequeue() {
    this.size--
    let result = this.front.data
    if (this.isEmpty()) {
      return null
    }

    if (this.front === this.tail) {
      this.front = null
      this.tail = null
    } else {
      // 使原本前面第二個節點變成第一個節點
      this.front = this.front.next
    }

    return result
  }
}