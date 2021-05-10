/*
 * @FileName: 自平衡二叉树
 * @Author: duxinyue
 * @Date: 2021-05-10 12:13:48
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-10 13:38:15
 * @FilePath: \JavaScript\dataStructure\Adelson-Velskii-Landi.js
 * @Description: 添加或者移除节点的时候，保持树节点的平衡
 */
import {
    BinarySearchTree
} from "./BinarySearchTree.js"
import {
    Node
} from "../models/node.js"
import {
    Compare,
    defaultCompare
} from "../utils/util.js"
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key) {
        this.root = this.insertNode(this.root, key)
    }
    insertNode(node, key) {
        if (node == null) {
            return new Node(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.left) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node)
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node)
            } else {
                return this.rotationRL(node)
            }
        }

        return node
    }
    remove(key) {
        this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        node = super.removeNode(node, key);

        if (node == null) return node;

        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationLL(node)
            }
            if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.left)
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationRR(node)
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationRL(node.right);
            }
        }

        return node;
    }
    // 向右单旋转
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    // 向左单旋转
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.right = node;
        return tmp;
    }
    // 向右双旋转
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node)
    }
    rotationRL(node) {
        node.right = this.rotationRR(node.right);
        return this.rotationRR(node)
    }
    // 节点的高度
    getNodeHeight(node) {
        if (node == null) return -1;
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    // 计算一个节点的平衡因子并返回其值
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }
}