/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-03 22:47:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-06 22:34:24
 * @Description: 文件描述
 */

function Ball(radius, color) {
    this.radius = radius || 10;
    this.color = color || "red";
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 3;
}

// 绘制小球
Ball.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
}

// 绘制矩形
Ball.prototype.getBounds = function () {
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.width * 2,
        height: this.height * 2
    }
}