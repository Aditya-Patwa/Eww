"use client";
import { useRef, useEffect, useState } from "react";
import Frame from "@/components/playground/elements/Frame";
import { Rectangle, Arc, Polygon } from "@/components/playground/elements/Shapes";

interface Layer {
    name: string,
    content: Rectangle | Arc | Polygon,
    type: "layer",
    visible: true,
}

interface Group {
    name: string,
    content: (Group | Layer)[],
    type: "group",
    visible: true
}

interface PlaygroundConfigInterface {
    frame: Frame,
    elements: (Group | Layer)[],
    scale: number
}



function drawPlayground(ctx: CanvasRenderingContext2D, playgroundConfig: PlaygroundConfigInterface) {
    if (typeof window !== "undefined") {
        let frame = playgroundConfig.frame;
        ctx.save();
        ctx.scale(playgroundConfig.scale, playgroundConfig.scale);
        frame.draw(ctx);
    
        playgroundConfig.elements.forEach((element) => {
            if(element.type == "group") {
                
            } else {
                element.content.draw(ctx);
            }
        });
    
        ctx.clearRect(0, 0, window.innerWidth, frame.position.y);
        ctx.clearRect(0, 0, frame.position.x, window.innerHeight);
        ctx.clearRect(frame.position.x+frame.width, 0, frame.position.x, window.innerHeight);
        ctx.clearRect(0, frame.position.y+frame.height, window.innerWidth, frame.height);
        ctx.restore();
    }
}


export default function Playground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [startPoint, setStartPoint] = useState({x: 0, y: 0});
    const [isPointerHeld, setIsPointerHeld] = useState(false);
    const [playgroundConfig, setPlaygroundConfig] = useState<PlaygroundConfigInterface>({frame: new Frame({x: 100, y: 100}, 100, 75), elements: [], scale: 1});
    const [activeShape, setActiveShape] = useState<Rectangle>(new Rectangle({x: 0, y: 0},  0, 0));


    function handleZooming (e: any) {
        if (e.key == "ArrowUp" && e.ctrlKey) {
            setPlaygroundConfig({...playgroundConfig, scale: playgroundConfig.scale + .1})
        } else if (e.key == "ArrowDown" && e.ctrlKey) {
            setPlaygroundConfig({...playgroundConfig, scale: playgroundConfig.scale - .1})
        };
    }

    useEffect(() => {
        setPlaygroundConfig({...playgroundConfig, frame: new Frame({x: (window.innerWidth-window.innerWidth/2)/2, y: (window.innerHeight-window.innerHeight/1.5)/2}, window.innerWidth/2, window.innerHeight/1.5)});        
    }, []);

    useEffect(() => {
        let canvas = canvasRef.current!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvasContextRef.current = canvas.getContext("2d")!;
        let ctx = canvasContextRef.current!;

        drawPlayground(ctx, playgroundConfig);

        document.addEventListener("keyup", handleZooming);

        console.log(playgroundConfig);

        return () => {
            document.removeEventListener("keyup", handleZooming);
        }
    }, [playgroundConfig]);

    function touchStart(e: any) {
        canvasRef.current?.classList.replace("cursor-grab", "cursor-grabbing");
        let ctx = canvasContextRef.current!;

        let shape = new Rectangle({x: e.clientX, y: e.clientY}, 0, 0);

        setActiveShape(shape);
        setStartPoint({x: e.clientX, y: e.clientY});
        setIsPointerHeld(true);
    }

    function touchMove(e: any) {
        if (typeof window !== "undefined") {
            // Client-side-only code
            let ctx = canvasContextRef.current!;
            if(isPointerHeld) {
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                drawPlayground(ctx, playgroundConfig);
                ctx.fillStyle = "rgba(69, 69, 69, .5)";
                ctx.fillRect(startPoint.x, startPoint.y, e.clientX-startPoint.x, e.clientY-startPoint.y);
            }
        }
    }

    function touchEnd(e: any) {
        if (typeof window !== "undefined") {
            canvasRef.current?.classList.replace("cursor-grabbing", "cursor-grab");
            let ctx = canvasContextRef.current!;
            setIsPointerHeld(false);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.fillRect(startPoint.x, startPoint.y, e.clientX-startPoint.x, e.clientY-startPoint.y);
    
            let shape = new Rectangle({x: activeShape.position.x, y: activeShape.position.y}, e.clientX-activeShape.position.x, e.clientY-activeShape.position.y);
    
            setActiveShape(shape);
            setPlaygroundConfig({...playgroundConfig, elements: [...playgroundConfig.elements, {content: shape, name: "Shape #1", type: "layer", visible: true}]})
        }
    }

    return (
        <canvas className={"bg-black bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:32px_32px]" + " cursor-crosshair"} onPointerDown={touchStart} onPointerMove={touchMove} onPointerUp={touchEnd} ref={canvasRef}>

        </canvas>
    )
}