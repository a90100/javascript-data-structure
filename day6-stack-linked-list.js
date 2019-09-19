class StackNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedStack {
  constructor() {
    this.top = null
    this.size = 0
  }

  // 判斷空堆疊
  isEmpty() {
    return this.top === null
  }

  // 堆疊長度
  length() {
    return this.size
  }

  // 新增堆疊元素
  push(value) {
    let node = new StackNode(value)
    node.next = this.top
    this.top = node
    this.size++
  }

  // 刪除堆疊元素
  pop() {
    let result = this.top
    this.top = this.top.next
    this.size--
    return result.data
  }

  // 查看堆疊最上面元素
  peek() {
    return this.top.data
  }
}

let stack = new LinkedStack()
stack.push(55)
stack.push(44)
stack.push(33)
stack.push(22)
stack.push(11)
stack.pop()

while (!stack.isEmpty()) {
  let value = stack.pop()
  console.log(value)
}