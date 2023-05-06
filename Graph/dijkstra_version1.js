// 實作一個簡單版的 Priority Queue，更完整可以用 heap 去實作
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    // 記錄每個節點的相鄰節點
    // ex: { 'A': [{ node: 'B', weight: 10 }] }
    this.adjacencyList = {};
  }
  // 加入節點
  addVertex(vertex) {
    // g.addVertex('A')
    // 結果範例: { 'A': [] }
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // 加入邊
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {}; // 記錄各節點到原點的最短路徑
    const previous = {};
    let path = []; //to return at end
    let smallest;

    // 初始化最優路徑集合和記錄各節點的前一節點的物件
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // 初始化後 distances 變成例如: { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity }
    // previous: { A: null, B: null, C: null, D: null, E: null, F: null }

    // while 迴圈持續執行條件: 還有節點尚未標記
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; // smallest ex: A, B, C...

      // 當前未標記節點等於終點時，產生最短路徑，用 path 陣列儲存
      if (smallest === finish) {
        while (previous[smallest]) {
          // ex: previous 物件為 { A: null, B: A, C: A, D: C, E: F, F: D }
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // 訪問當前要標記節點的鄰居，neighbor 為數字，例如 0, 1, 2
        // 打印 this.adjacencyList 的結果見圖，一個物件，A 內的 0, 1 為 neighbor:
        // https://i.imgur.com/hR349Dx.png
        for (let neighbor in this.adjacencyList[smallest]) {

          // 找到某節點的鄰居
          let nextNode = this.adjacencyList[smallest][neighbor];
          // 計算起點到當前節點的距離 + 當前節點到下個節點的距離
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          // 如果當前表格記錄的鄰居節點距離比當前計算出的新的距離長，就去更新表格內的值
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            // 更新當前鄰居節點在表格上記錄的前一個節點值
            previous[nextNeighbor] = smallest;
            // 將鄰居節點加入標記行列
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

// 以下是建立圖
var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E'); // ["A", "C", "D", "F", "E"]
