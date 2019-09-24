class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  // 使用遞迴去遍歷樹節點
  collect(current = this.root, nodes = []) {
    if (current === null) {
      return nodes
    }
    nodes.push(current.data)

    this.collect(current.left, nodes)
    this.collect(current.right, nodes)
    return nodes
  }
}

let n1 = new TreeNode(50);
let n2 = new TreeNode(43);
let n3 = new TreeNode(67);
let n4 = new TreeNode(81);
let n5 = new TreeNode(75);

let tree = new Tree();
tree.root = n1
n1.left = n2
n1.right = n3
n3.right = n4
n4.left = n5

console.log(tree.collect())