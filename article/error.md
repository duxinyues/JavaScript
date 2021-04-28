<!--
 * @fileName: 在JavaScript文件中通过import引入公共模块，然后就报错
 * @Author: duxinyue
 * @Date: 2021-04-28 17:14:58
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-28 17:24:47
 * @FilePath: \JavaScript\article\error.md
-->

在JavaScript文件中通过import引入公共模块，然后就报错了：

```
PS D:\code\JavaScript\js> node .\bubbleSort.js
(node:18356) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
D:\code\JavaScript\js\bubbleSort.js:9
import {arr} from "./array-data.js";
^^^^^^

SyntaxError: Cannot use import statement outside a module
```
解决这类异常方式是：首先确保当前的环境已经安装了node，然后用命令执行`npm init -y`生成package.json文件。

最后修改一下：添加一下`"type": "module",`
```
{
  "name": "JavaScript",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/qingzhuxin/JavaScript.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/qingzhuxin/JavaScript/issues"
  },
  "homepage": "https://github.com/qingzhuxin/JavaScript#readme"
}

```