/**
 * 树：分层数据的抽象模型
 */
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
class Node {
    constructor(key) {
        this.key = key; // 节点值
        this.left = null; //左侧节点引用
        this.right = null; // 右侧节点引用
    }
}


class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null; //根节点
    }
    insertNode(node, key) {
        console.log(this.compareFn(key, node.key), key, node.key)
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key)
            }
        } else if (node.right == null) {
            node.right = new Node(key);
        } else {
            this.insertNode(node.right, key)
        }
    }
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    search(key) {}

    // 通过中序遍历所有节点
    inOrderTraverse() {}

    // 通过后序遍历所有节点
    postOrderTraverse() {}

    min() {}
    max() {}
    remove(key) {}
}


const tree = new BinarySearchTree();

tree.insert(4);
tree.insert(5);
tree.insert(3);
tree.insert(32);
tree.insert(324);
console.log("树", tree)