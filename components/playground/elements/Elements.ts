class ActiveElementHandler {
    position: {x: number, y: number};
    width: number;
    height: number;

    constructor(position: {x: number, y: number}, width: number, height: number) {
        this.position = position;
        this.height = height;
        this.width = width;
    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "rgba(0, 100, 255, 1)";
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.lineWidth = 2;
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        
        ctx.strokeRect(this.position.x-2, this.position.y-2, 4, 4);
        ctx.fillRect(this.position.x-2, this.position.y-2, 4, 4);
    }
}