/*
 * @FileName: Node类
 * @Author: duxinyue
 * @Date: 2021-05-10 00:08:12
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-10 00:10:25
 * @FilePath: \JavaScript\models\node.js
 * @Description: 二叉搜索树节点
 */

export class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}