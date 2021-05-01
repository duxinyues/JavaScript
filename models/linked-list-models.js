/*
 * @FileName: linked-list-models.js
 * @Author: duxinyue
 * @Date: 2021-04-29 14:12:31
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 14:28:49
 * @FilePath: \JavaScript\models\linked-list-models.js
 * @Description: 链表助手类Node，表示添加到链表中的项，包含一个element【添加的链表元素的值】和一个next属性【指向下一个链表元素的指针】
 */
export  class  Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}