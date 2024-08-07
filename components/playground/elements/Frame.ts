class Frame {
    position: {x: number, y: number};
    width: number;
    height: number;
    backgroundColor: string;

    constructor(position: {x: number, y: number}, width: number, height: number) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.backgroundColor = "rgb(30, 30, 30, 1)";
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.restore();
    }
}

export default Frame;