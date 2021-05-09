/*
 * @FileName: 
 * @Author: duxinyue
 * @Date: 2021-05-09 16:24:04
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-09 17:08:12
 * @FilePath: \JavaScript\dataStructure\Map\hashTable.js
 * @Description: 
 */
import {
    defaultToString
} from "../../utils/util.js"
import {
    ValuePair
} from "./Dictionary.js"
import {
    LinkedList
} from "../linkedList.js"
export class HashTable {

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.tables = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.tables[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    remove(key) {
        const hash = this.hashCode(key);
        const valuePairs = this.tables[hash];
        if (valuePairs != null) {
            delete this.tables[hash];
            return true;
        }

        return false;
    }
    get(key) {
        const valuePair = this.tables[this.hashCode(key)];
        return valuePair = null ? undefined : valuePair.value
    }
    /**
     * 散列函数
     * @param {*} key 
     * @returns 
     */
    loseloseHashCode(key) {
        if (typeof key === "number") return key;
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let index = 0; index < tableKey.length; index++) {
            hash += tableKey.charCodeAt(index);
        }

        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key)
    }
}

//  避免散列表中的冲突，使用分离链接来创建散列表
export class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new LinkedList()
            }
            this.table[position].push(new ValuePair(key, value));
            return true
        }
        return false;
    }
    get(key) {}
    remove(key) {}
}