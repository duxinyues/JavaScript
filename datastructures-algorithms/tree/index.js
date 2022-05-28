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
        // 当前节点key和父节点key比较，当前key小于父节点的key，那么该节点放在父节点的左侧
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
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) return false;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true
        }
    }

    // 通过中序遍历所有节点
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);

            this.inOrderTraverseNode(node.right, callback)
        }
    }

    // 通先序序遍历所有节点
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback)
        }
    }

    // 后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key)
        }
    }
    min() {
        return this.minNode(this.root)
    }
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left
        }

        return current
    }
    max() {
        return this.maxNode(this.root)
    }
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right
        }

        return current
    }
    remove(key) {
        return this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        if (node == null) return null;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.right) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }

            if (node.left == null) {
                node = node.right;
                return node;
            }

            if (node.right == null) {
                node = node.left;
                return node
            }

            const aux = this.minNode(node.right)
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}

/**
 * 
 * 树的一条分支有很多层的时候，其他的分支层数很少，
 * 这样在添加、删除和搜索节点的时候，引起一些性能的问题
 * 自平衡树：就是任何一个节点的左右两侧子树的高度相差最多为1。
 */
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    // 计算节点的高度，返回最高的节点
    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }

        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
    }

    // 计算一个平衡因子
    getBalanceFactor(node) {
        /**
         * 平衡操作：
         * 在添加或者删除节点后，我们需要计算节点的高度并且验证树是否需要进行平衡
         */
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

    // 左左：向右单向旋转
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    // 右右：向左单向旋转
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    // 左右：向右双旋转
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    // 右左：向左双旋转
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return thid.rotationRR(node)
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
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }

        // 平衡操作
        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node)
            }
        }

        return node
    }

    removeNode(node, key) {
        node = super.removeNode(node, key);

        if (node === null) {
            return node;
        }
        // 需要平衡
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationLL(node);
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
                return this.rotationRL(node.right)
            }
        }
        return node
    }
}

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}
const tree = new BinarySearchTree();

tree.insert(32);
tree.insert(12);
tree.insert(11);
tree.insert(23);
tree.insert(7);
tree.insert(36);
tree.insert(32);
tree.insert(37);


console.log("树", tree)
console.log('\n')
tree.inOrderTraverse((value) => {
    console.log("中序遍历树", value)
})
console.log('\n')
tree.preOrderTraverse((value) => {
    console.log("先序遍历", value)
})

console.log('\n')
tree.postOrderTraverse((value) => {
    console.log("后序遍历", value)
})
console.log('\n')
console.log("最小节点", tree.min())

console.log('\n')
console.log("最大节点", tree.max())
console.log('\n')
console.log("搜索", tree.search(11))
console.log('\n')
console.log("删除", tree.remove(7))