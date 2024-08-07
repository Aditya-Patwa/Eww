class Rectangle {
    position: {x: number, y: number};
    width: number;
    height: number;
    backgroundColor: string;
    strokeColor: string;
    strokeWidth: number;

    constructor(position: {x: number, y: number}, width: number, height: number) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.backgroundColor = "white";
        this.strokeColor = "black";
        this.strokeWidth = 5;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.backgroundColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeWidth;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class Arc {
    draw(ctx: CanvasRenderingContext2D) {

    }
}


class Polygon {
    draw(ctx: CanvasRenderingContext2D) {

    }
}

export { Rectangle, Arc, Polygon };