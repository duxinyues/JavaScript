/**
 * 创建一个集合类
 */

class Set {
  constructor() {
    // 用一个对象来存储集合元素
    this.items = {}
  }

  /**
   * 判断一个元素是否存在于集合中，因为使用对象来存储集合元素，那就可以使用in操作符来验证元素是否是items的属性
   *   has(element) {
   *     return Object.hasOwnProperty.call(this.items, element)
   *  }
   * 这两种写法的区别是：
   * in操作符返回值表示对象在原型链上是否存在某个属性
   * Object原型有hasOwnProperty方法，返回一个布尔值，表示对象是否具有某个属性值。
   */

  has(element) {
    return element in this.items
  }

  // 添加元素
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    // 添加元素，返回false时，表示该集合已经存在该元素了
    return false
  }

  // 删除元素
  delete(element) {
    // 先判断集合是否含有该元素：存在，则删除该元素，否则返回false
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  // 清空
  clear() {
    this.items = {};
  }

  // size方法
  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));

    otherSet.values().forEach(value => unionSet.add(value));

    return unionSet
  }

  // 交集
  intersect(otherSet) {
    const intersection = new Set();
    const values = this.values()
    const otherValues = otherSet.values();
    const mapSet = (maxSet, minSet) => {
      minSet.forEach(value => {
        if (maxSet.includes(value)) {
          intersection.add(value)
        }
      })
    }

    if (values.length > otherValues.length) {
      mapSet(values, otherValues)
    } else {
      mapSet(otherValues, values)
    }

    return intersection
  }

  // 差集
  difference(otherSet) {
    const difference = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        difference.add(value)
      }
    });

    return difference;
  }

  // 子集
  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;

    return this.values().every(value => (otherSet.has(value)))
  }
}

const setA = new Set();
setA.add(1)
setA.add(4)
const setB = new Set();
setB.add(2);
setB.add(1);
setB.add(3);

const setC = setA.union(setB)
console.log("setC", setC.values())


console.log("交集", setA.intersect(setB));// 交集 Set { items: { '1': 1 } }
console.log("差集", setA.difference(setB));// 差集 Set { items: { '4': 4 } }

const setD = new Set();
setD.add(1);

console.log("子集",setD.isSubSetOf(setB)); // true