/**
 * 散列算法：尽可能块的在数据结构中找到一个值
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

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const postion = this.hashCode(key);
      this.table[postion] = new ValuePair(key, value);
      return true
    }
    return false;
  }
  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true
    }

    return false;
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)];

    return valuePair == null ? undefined : valuePair.value;
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let index = 0; index < tableKey.length; index++) {
      hash += tableKey.charCodeAt(index)
    }

    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }
}


const hash = new HashTable();
hash.put("duXin", "1638877065@qq.com");
hash.put("xueLian", "2550537992@qq.com");
hash.put("qingZhuYue", "34583462@qq.com");

console.log(hash.hashCode("xueLian"))