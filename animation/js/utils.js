/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-03 12:39:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-03 13:11:24
 * @Description: 文件描述
 */
const utils = {
    // 鼠标移动位置
    captureMouse: (element) => {
        let mouse = { x: 0, y: 0 };
        element.addEventListener('mousemove', (event) => {
            let x, y;
            if (event.pageX || event.page.Y) {
                x = event.pageX;
                y = event.pageY;
            } else {
                x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = event.clientY + document.documentElement.scrollTop + document.documentElement.scrollTop
            }
            x -= element.offsetLeft;
            y -= element.offsetTop

            mouse.x = x;
            mouse.y = y;
        })

        return mouse;
    },

    // 触摸位置
    captureTouch: (element) => { 
        let touch ={x:null,t:null,isPressed:false}
    }
}
