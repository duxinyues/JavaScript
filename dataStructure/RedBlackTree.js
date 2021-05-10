/*
 * @FileName: RedBlackTree
 * @Author: duxinyue
 * @Date: 2021-05-10 13:45:05
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-10 16:27:45
 * @FilePath: \JavaScript\dataStructure\RedBlackTree.js
 * @Description: 红黑树
 * 
 * 在红黑树中，每个节点都遵循以下规则：
 * (1) 顾名思义，每个节点不是红的就是黑的；
 * (2) 树的根节点是黑的；
 * (3) 所有叶节点都是黑的（用NULL引用表示的节点）；
 * (4) 如果一个节点是红的，那么它的两个子节点都是黑的；
 * (5) 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点；
 * (6) 从给定的节点到它的后代节点（NULL叶节点）的所有路径包含相同数量的黑色节点。
 */
import {
    BinarySearchTree
} from "./BinarySearchTree.js"
import {
    defaultCompare 
} from "../utils/util.js"
import {
    Node
} from "../models/node.js"
class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Color.RED;
        this.parent = null;
    }
    isRed() {
        return this.color === Color.RED;
    }
}
class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

}