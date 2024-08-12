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




// Last Code


// function handleZooming(e: any) {
//     if (e.key == "ArrowUp" && e.ctrlKey) {
//         setPlaygroundConfig({ ...playgroundConfig, scale: playgroundConfig.scale + .1 })
//     } else if (e.key == "ArrowDown" && e.ctrlKey) {
//         setPlaygroundConfig({ ...playgroundConfig, scale: playgroundConfig.scale - .1 })
//     };
// }

// useEffect(() => {
//     setPlaygroundConfig({ ...playgroundConfig, frame: new Frame({ x: (window.innerWidth - window.innerWidth / 2) / 2, y: (window.innerHeight - window.innerHeight / 1.5) / 2 }, window.innerWidth / 2, window.innerHeight / 1.5) });
// }, []);

// useEffect(() => {
//     let canvas = canvasRef.current!;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     canvasContextRef.current = canvas.getContext("2d")!;
//     let ctx = canvasContextRef.current!;

//     drawPlayground(ctx, playgroundConfig);

//     document.addEventListener("keyup", handleZooming);

//     console.log(playgroundConfig);

//     return () => {
//         document.removeEventListener("keyup", handleZooming);
//     }
// }, [playgroundConfig]);

// function touchStart(e: any) {
//     canvasRef.current?.classList.replace("cursor-grab", "cursor-grabbing");
//     let ctx = canvasContextRef.current!;

//     let shape = new Rectangle({ x: e.clientX, y: e.clientY }, 0, 0);

//     setActiveShape(shape);
//     setStartPoint({ x: e.clientX, y: e.clientY });
//     setIsPointerHeld(true);
// }

// function touchMove(e: any) {
//     if (typeof window !== "undefined") {
//         // Client-side-only code
//         let ctx = canvasContextRef.current!;
//         if (isPointerHeld) {
//             ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//             drawPlayground(ctx, playgroundConfig);
//             ctx.fillStyle = "rgba(69, 69, 69, .5)";
//             ctx.fillRect(startPoint.x, startPoint.y, e.clientX - startPoint.x, e.clientY - startPoint.y);
//         }
//     }
// }

// function touchEnd(e: any) {
//     if (typeof window !== "undefined") {
//         canvasRef.current?.classList.replace("cursor-grabbing", "cursor-grab");
//         let ctx = canvasContextRef.current!;
//         setIsPointerHeld(false);
//         ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//         ctx.fillStyle = "rgba(255, 255, 255, 1)";
//         ctx.fillRect(startPoint.x, startPoint.y, e.clientX - startPoint.x, e.clientY - startPoint.y);

//         let shape = new Rectangle({ x: activeShape.position.x, y: activeShape.position.y }, e.clientX - activeShape.position.x, e.clientY - activeShape.position.y);

//         setActiveShape(shape);
//         setPlaygroundConfig({ ...playgroundConfig, elements: [...playgroundConfig.elements, { content: shape, name: "Shape #1", type: "layer", visible: true }] })
//     }
// }