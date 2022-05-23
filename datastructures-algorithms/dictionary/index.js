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

  clear() { this.table = {} }

  size() { return Object.keys(this.table).length }

  inEmpty() { return this.size() === 0 }

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

const setData = new Dictionary();

setData.set(2, 200)
setData.set(3, 200)
console.log(setData)
console.log("get：", setData.get(2))
console.log("keyValues", setData.keyValues())
console.log(setData.remove(1))
console.log("remove后的字典", setData)

console.log(setData.values())