export default class Screen {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    drawRectangle(x, y, h, w, c){
        this.ctx.fillStyle = c;
        this.ctx.fillRect(x, y, h, w);
    }

    clearRectangle(x, y, h, w){
        this.ctx.clearRect(x, y, h, w)
    }
}


