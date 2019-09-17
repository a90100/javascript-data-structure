class ListNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

function printList(node) {
  let current = node
  let result = "root -> "
  while (current != null) {
    result += current.data + " -> "
    console.log(current.next);
    current = current.next
  }
  result += "null"
  console.log(result)
}

let n1 = new ListNode(2)
let n2 = new ListNode(4)
let n3 = new ListNode(6)

n1.next = n2
n2.next = n3

printList(n1);