/**
 * 字典，使用键值对的格式来存储数据，字典中的每一个键值对都是唯一的。
 */
function defaultToString(items) {
  if (items === null) {
    return "NULL";
  } else if (items === undefined) {
    return "UNDEFINED";
  } else if (typeof items === 'string' || items instanceof String) {
    return `${items}`;
  }

  return items.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}:${this.value}]`;
  }
}

class Dictionary {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn;
    this.table = {}; // 用对象来存储字典
  }

  // 添加数据
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStringFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  // 通过key，在字典中删除key对应的值
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStringFn(key)];
      return true
    }
    return false;
  }


  hasKey(key) {
    return this.table[this.toStringFn(key)] != null
  }

  get(key) {

    if (this.hasKey(key)) {
      return this.table[this.toStringFn(key)]
    }
    return undefined
  }

  clear() {
    this.table = {}
  }

  size() {
    return Object.keys(this.table).length
  }

  inEmpty() {
    return this.size() === 0
  }

  keys() {
    return this.keyValues().map(value => value.key)
  }

  values() {
    return this.keyValues().map((valuePair) => (valuePair.value))
  }

  keyValues() {
    return Object.values(this.table);
    // 兼容写法：
    const valuePairs = [];
    for (const key in this.table) {
      if (this.hasKey(key)) {
        valuePairs.push(this.table[key]);
      }
    }
    return ValuePair
  }

  forEach(callback) {
    const valuePair = this.keyValues();

    for (let index = 0; index < valuePair.length; index++) {
      const result = callback(valuePair[index].key, valuePair[index].value);
      if (result === false) break;
    }

  }
}

/**
 * 图的结构
 */

// 在广度优先和深度优先算法中标记顶点，使用Colors变量
const Colors = {
  WHITE: 0, // 顶点还没有被访问
  GREY: 1, // 顶点被访问过，但是没有被探索过
  BLACK: 2, // 顶点被访问且被探索过
}
// 广度优先和深度优先的算法，需要一个辅助方法来存储顶点是否被访问过
// 在每个算法的开头，所有顶点都标记为白色，未被访问
const initializeColor = vertice => {
  const color = {};
  for (let index = 0; index < vertice.length; index++) {
    color[vertice[index]] = Colors.WHITE;
  }
  return color;
}

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; // 图是否有向
    this.vertice = []; // 图顶点的名字
    this.adjList = new Dictionary(); // 用字典来存储邻接表
  }
  /**
   * 
   * @param {*} value 
   * 添加顶点value
   * 如果这个顶点没有存在于图中，那就将这个顶点加入顶点列表中。
   */
  addVertex(value) {
    if (!this.vertice.includes(value)) {
      this.vertice.push(value);
      this.adjList.set(value, [])
    }
  }
  /**
   * 连接顶点
   * @param {*顶点} value 
   * @param {*顶点} w 
   * 
   * 这个函数接受两个顶点，
   * 先判断两个顶点是否存在于图中，如果没有，就先将他们加入顶点列表中
   */
  addEdge(value, w) {
    if (!this.adjList.get(value)) {
      this.addVertex(value);
    }

    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(value)["value"].push(w);
    if (!this.isDirected) {
      this.adjList.get(w)["value"].push(value)
    }
  }

  getVertices() {
    return this.vertice;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let index = 0; index < this.vertice.length; index++) {
      s += `${this.vertice[index]}->`;
      const neighbors = this.adjList.get(this.vertice[index])['value'];
      neighbors.forEach(item => {
        s += `${item}`
      })
      s += '\n';
    }

    return s;
  }
}
// 队列
class Queue {
  constructor() {
    this.count = 0; // 队列大小
    this.lowestCount = 0; //追踪第一个元素
    this.items = {}; // 对象存储元素
  }
  // 入队
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  // 出队【第一个先出】
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return ""
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let index = this.lowestCount + 1; index < this.count; index++) {
      objString = `${objString},${this.items[index]}`
    }
    return objString;
  }
}
// 栈
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
// 广度优先搜索
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertice = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertice);
  const queue = new Queue();
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    // 从队列中获取一个顶点
    const u = queue.dequeue();
    // 获取该顶点的所有邻点的邻接表
    const neighbors = adjList.get(u)['value'];
    // 该顶点被初始化为灰色
    color[u] = Colors.GREY;

    // 遍历顶点的每一个邻点
    for (let index = 0; index < neighbors.length; index++) {
      // 获取该邻点的值【该顶点的名字】
      const w = neighbors[index];
      // 如果该邻点未被访问【白色】，
      if (color[w] === Colors.WHITE) {
        // 标记为灰色
        color[w] = Colors.GREY;
        // 入栈，当这个顶点出栈的时候，我们可以完成对该顶点的探索。
        queue.enqueue(w);
      }
    }

    color[u] = Colors.BLACK;
    if (callback) {
      callback(u)
    }
  }
}

// 寻找最短距离
const BFS = (graph, startVertex) => {
  const vertice = graph.getVertices();
  const adjList = graph.getAdjList();

  const color = initializeColor(vertice);
  const queue = new Queue();

  const distances = {}; // 距离
  const predecessors = {}; // 前溯点
  queue.enqueue(startVertex);

  for (let index = 0; index < vertice.length; index++) {
    distances[vertice[index]] = 0;
    predecessors[vertice[index]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u)['value'];
    color[u] = Colors.GREY;

    for (let index = 0; index < neighbors.length; index++) {
      const w = neighbors[index];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;

        distances[w] = distances[u] + 1;
        // 当我们发现顶点u的邻点w时，w的前溯点为u
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors
  };
}

// 深度优先搜索
const depthFirstSearch = (graph, callback) => {
  const vertice = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertice);

  for (let index = 0; index < vertice.length; index++) {
    if (color[vertice[index]] === Colors.WHITE) {
      depthFirstSearchVisit(vertice[index], color, adjList, callback)
    }
  }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }

  const neighbors = adjList.get(u)['value'];
  for (let index = 0; index < neighbors.length; index++) {
    const w = neighbors[index];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }

  color[u] = Colors.BLACK;
}

// const dictionary = new Dictionary();
// dictionary.set("duxin", "1638877065@qq.com")
// console.log(dictionary)
// console.log(dictionary.hasKey("duxin"))

// 图
const graph = new Graph();
const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

arr.forEach(item => {
  graph.addVertex(item)
})

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString())


/**
 * 广度优先搜索
 * 指定从图的第一个顶点开始搜索，先访问所有的相邻顶点，就是一次访问图的一层，先宽度再深度
 */

breadthFirstSearch(graph, arr[0], (value) => {
  console.log("图的顶点", value)
})

const distances = BFS(graph, "B")
console.log("最短距离", distances)

depthFirstSearch(graph, (value) => {
  console.log("深度搜索", value)
})