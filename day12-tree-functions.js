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

  sum(node = this.root) {
    if (node === null) {
      return 0
    }
    return node.data +
      this.sum(node.left) +
      this.sum(node.right)
  }

  contains(value) {
    return this._contains(this.root, value)
  }

  _contains(node, value) {
    if (node === null) {
      return false
    } else if (node.data === value) {
      return true
    }
    return this._contains(node.left, value) ||
      this._contains(node.right, value)
  }

  size(node = this.root) {
    if (node === null) {
      return 0
    }
    return 1 + this.size(node.left) + this.size(node.right)
  }

  leaves(node = this.root) {
    if (node === null) {
      return 0
    }
    if (node.left === null && node.right === null) {
      return 1
    }
    return this.leaves(node.left) + this.leaves(node.right)
  }

  min(node = this.root) {
    if (node === null) {
      return tree.max()
    }
    let leftMin = this.min(node.left)
    let rightMin = this.min(node.right)
    if (node.data < leftMin && node.data < rightMin) {
      return node.data
    } else if (leftMin < rightMin) {
      return leftMin
    } else {
      return rightMin
    }
  }

  max(node = this.root) {
    if (node === null) {
      return 0
    }
    let leftMax = this.max(node.left)
    let rightMax = this.max(node.right)
    if (node.data > leftMax && node.data > rightMax) {
      return node.data
    } else if (leftMax > rightMax) {
      return leftMax
    } else {
      return rightMax
    }
  }

  height(node = this.root) {
    if (node === null) {
      return 0
    }
    let leftHeight = this.height(node.left)
    let rightHeight = this.height(node.right)
    if (leftHeight > rightHeight) {
      return 1 + leftHeight
    } else {
      return 1 + rightHeight
    }
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

console.log("collect: " + tree.collect())
console.log("sum: " + tree.sum())
console.log("contains: " + tree.contains(2))
console.log("size: " + tree.size())
console.log("leaves: " + tree.leaves())
console.log("min: " + tree.min())
console.log("max: " + tree.max())
console.log("height: " + tree.height())