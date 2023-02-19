class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(ele) {
    this.values.push(ele);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;

      // swap two nodes
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      // 宣告兩個子節點和索引
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // 兩個節點索引不能超過陣列長度，避免取得不存在的節點
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        // [33, 41, 39]，避免這種情況，所以多加 swap 做判斷
        const isRightChildLargerElementAndLeftNotLargetElement = swap === null && rightChild > element;

        // [33, 39, 41]，處理右節點最大的狀況
        const isRightChildLargest = swap !== null && rightChild > leftChild;
        if (isRightChildLargerElementAndLeftNotLargetElement || isRightChildLargest) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap; // 更新要交換的節點索引
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
