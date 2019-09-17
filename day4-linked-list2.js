class ListNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  // 用以呈現linked list字串模樣
  toString() {
    let result = "root -> "
    let current = this.root
    while (current !== null) {
      result += current.data + " -> "
      current = current.next
    }
    return result + "null"
  }

  // 回傳linked list長度
  length() {
    // 從第一個節點開始
    let current = this.root
    let count = 0
    while (current !== null) {
      count++
      // current移到下個節點
      current = current.next
    }
    return count
  }

  // 判斷linked list是否有節點
  isEmpty() {
    return this.root === null
  }

  // 取得指定節點
  get(index) {
    let current = this.root
    let count = 0
    while (current !== null) {
      if (count === index) {
        return current.data
      }
      count++
      current = current.next
    }
    return null
  }

  // 在linked list移除節點
  removeAtIndex(index) {
    // 避免不存在的索引值
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      if (this.root !== null) {
        this.root = this.root.next
      }
    } else {
      let current = this.root
      let i = 0
      // 不斷從第一個節點往下找，直到current是目標刪除節點的前前個節點
      while (current !== null && i < index - 1) {
        i++
        current = current.next
      }
      // 經過最後一次while迴圈，current是被刪除節點的前一個節點，直接指定current的下一個節點是後後個節點，跳過被刪除節點
      current.next = current.next.next
    }
  }

  // 在linked list增加節點
  addAtIndex(index, data) {
    // 在linked list最前面增加節點
    if (index === 0) {
      let node = new ListNode(data) // 產生新節點
      node.next = this.root // 將新節點的指標指向原本第一個節點
      this.root = node // 現在，換新節點是第一個節點了

      this.size++
    } else {
      let current = this.root
      let i = 0
      while (current !== null && i < index - 1) {
        i++
        current = current.next
      }

      let node = new ListNode(data)
      node.next = current.next
      current.next = node
    }
  }
}

let list = new LinkedList()
list.addAtIndex(0, 1)
list.addAtIndex(0, 2)
list.addAtIndex(0, 3)
console.log(list.toString())
list.removeAtIndex(0)
console.log(list.toString())
list.addAtIndex(2, 4)
console.log(list.toString())