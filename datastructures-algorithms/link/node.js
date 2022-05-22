/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-23 21:18:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-23 21:31:38
 * @Description: 节点
 */
export default class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}