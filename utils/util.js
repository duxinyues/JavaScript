/*
 * @FileName: 
 * @Author: duxinyue
 * @Date: 2021-04-29 14:06:29
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 14:36:27
 * @FilePath: \JavaScript\utils\util.js
 */
export function defaultEquals(a, b) {
    return a === b;
}

export function defaultToString(item) {
    if (item === null) {
        return "NULL";
    }
    if (item === undefined) {
        return "UNDEFINED";
    }
    if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }

    return item.toString();
}