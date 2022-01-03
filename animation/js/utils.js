/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-03 12:39:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-03 14:04:04
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
        /**
         * isPressed 是否按下
         */
        let touch = { x: null, y: null, isPressed: false };

        element.addEventListener('touchstart', () => {
            touch.isPressed = true;
        }, false);

        element.addEventListener('touchend', () => {
            touch.isPressed = false;
            touch.x = null;
            touch.y = null;
        }, false);

        element.addEventListener('touchmove', (e) => {
            let x, y, touch_event = e.touches[0];
            if (touch_event.pageX || touch_event.pageY) {
                x = touch_event.pageX;
                y = touch_event.pageY;
            } else {
                x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = touch_event.clientY + document.body.scrollTop + document.documentURI.scrollTop;
            }

            x -= element.offsetLeft;
            y -= element.offsetTop;
        }, false);

        return touch
    }
}
