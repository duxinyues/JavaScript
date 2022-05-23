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

  get(key) { }

  clear() { }

  size() { }

  inEmpty() { }

  keys() { }

  values() { }

  keyValues() { }

  forEach() { }
}

const setData = new Dictionary();

setData.set(2, 200)
console.log(setData)