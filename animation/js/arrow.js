/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-03 13:42:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-03 14:05:31
 * @Description: 文件描述
 */
function Arrow() {
    this.x = 0;
    this.y = 0;
    this.color = 'red';
    this.rotation = 0;
}

Arrow.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.beginPath();

    context.moveTo(-50, -25);
    context.lineTo(0, 25);
    context.lineTo(0, -50);
    context.lineTo(50, 0);
    context.lineTo(0, 50);
    context.lineTo(0, 25);
    context.lineTo(-50, 25);
    context.lineTo(-50, -25);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}
