/*
 * @FileName: 二叉树
 * @Author: duxinyue
 * @Date: 2021-05-10 00:15:26
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-10 11:54:08
 * @FilePath: \JavaScript\dataStructure\BinarySearchTree.js
 * @Description: 
 */
import {
    Compare,
    defaultCompare
} from "../utils/util.js"
import {
    Node
} from "../models/node.js"
export class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null; //Node 的根节点
    }
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key);
        }
    }
    /**
     * 搜索特定的值
     * @param {*} key 
     */
    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) return false;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        }

        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        }

        return true
    }
    /**
     * 中序遍历
     * @param {*} callback 
     * 以上行顺序访问BST所有节点的遍历方式
     * 从最小到最大的顺序遍历所有的节点
     */
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    /**
     * 先序遍历
     * @param {*} callback 
     * 优先于后代节点的顺序访问每一个节点
     * 打一个结构化的文档
     * 先访问节点本身
     * 再次访问它的左侧节点
     * 最后是右侧节点
     */
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    /**
     * 后序遍历
     * @param {*} callback 
     * 先访问后代节点。再访问节点本身
     * 后序遍历的一种应用是计算一个目录及其子目录中所有文件所占空间的大小。
     */
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    // 二叉树最小值
    min() {
        return this.minNode(this.root)
    }
    //从树的任意节点查找最小键
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    max() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        if (node == null) return false;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }else  if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        }else{
            if (node.left == null && node.right) {
                node = null;
                return node
            }
    
            if (node.left == null) {
                node - node.right;
                return node;
            }else if (node.right == null) {
                node = node.left;
                return node;
            }
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
    
            return node;
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key)
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(111);
tree.insert(121);
tree.insert(31);
tree.insert(1)
tree.insert(141);
tree.insert(5);
tree.insert(2);
tree.insert(2550)
tree.remove(111)
console.log(tree)

const printNode = (value) => {
    console.log(value)
}

console.log("中序")
tree.inOrderTraverse(printNode); // 31 111  121  141
console.log("先序")
tree.preOrderTraverse(printNode)

console.log("后序");
tree.postOrderTraverse(printNode)

console.log("最小值===", tree.min())
console.log("最大值===", tree.max())

console.log("搜索===", tree.search(33))


console.log(tree)