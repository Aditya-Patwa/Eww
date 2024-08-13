"use client";
import { useRef, useEffect, useState, useContext, PointerEventHandler, PointerEvent, MouseEvent } from "react";
import Frame from "@/components/playground/elements/Frame";
import { PlaygroundContext, PlaygroundContextInterface } from "./PlaygroundContext";
import { Rectangle, Arc, Polygon } from "@/components/playground/elements/Shapes";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

// const methods: any = {"pointer": Frame, "rectangle": Frame, "arc": Frame, "polygon": Frame, "frame": Frame, "grab": Frame, "text": Frame};

// function drawPlayground(ctx: CanvasRenderingContext2D, playgroundConfig: PlaygroundConfigInterface) {
//     if (typeof window !== "undefined") {
//         let frame = playgroundConfig.frame;
//         ctx.save();
//         ctx.scale(playgroundConfig.scale, playgroundConfig.scale);
//         frame.draw(ctx);

//         playgroundConfig.elements.forEach((element) => {
//             if (element.type == "group") {

//             } else {
//                 element.content.draw(ctx);
//             }
//         });

//         ctx.clearRect(0, 0, window.innerWidth, frame.position.y);
//         ctx.clearRect(0, 0, frame.position.x, window.innerHeight);
//         ctx.clearRect(frame.position.x + frame.width, 0, frame.position.x, window.innerHeight);
//         ctx.clearRect(0, frame.position.y + frame.height, window.innerWidth, frame.height);
//         ctx.restore();
//     }
// }

function drawPlayground(playgroundInterface: PlaygroundContextInterface, ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.scale(1, 1);

    playgroundInterface.elements.forEach((element) => {
        if (element.type == "frame" && element.visible) {
            element.frame.draw(ctx);
        }
    });

    playgroundInterface.elements.forEach((element) => {
        if(element.name == playgroundInterface.activeElement) {
            ctx.strokeStyle = "rgba(0, 100, 255, 1)";
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.lineWidth = 2;
            if(element.type == "frame") {
                
                ctx.strokeRect(element.frame.position.x, element.frame.position.y, element.frame.width, element.frame.height);
                
                
                ctx.strokeRect(element.frame.position.x-5, element.frame.position.y-5, 10, 10);
                ctx.fillRect(element.frame.position.x-5, element.frame.position.y-5, 10, 10);

                ctx.strokeRect(element.frame.position.x-5, element.frame.position.y+element.frame.height-5, 10, 10);
                ctx.fillRect(element.frame.position.x-5, element.frame.position.y+element.frame.height-5, 10, 10);

                ctx.strokeRect(element.frame.position.x+element.frame.width-5, element.frame.position.y-5, 10, 10);
                ctx.fillRect(element.frame.position.x+element.frame.width-5, element.frame.position.y-5, 10, 10);

                ctx.strokeRect(element.frame.position.x+element.frame.width-5, element.frame.position.y+element.frame.height-5, 10, 10);
                ctx.fillRect(element.frame.position.x+element.frame.width-5, element.frame.position.y+element.frame.height-5, 10, 10);
            }
        }
    });
    ctx.restore();
}


export default function Playground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
    const [isPointerHeld, setIsPointerHeld] = useState(false);
    const { playgroundInterface, setPlaygroundInterface } = useContext(PlaygroundContext);
    const [cursorStyle, setCursorStyle] = useState("cursor-fancy");

    useEffect(() => {
        let canvas = canvasRef.current!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext("2d");
        canvasContextRef.current = ctx!;

        drawPlayground(playgroundInterface, canvasContextRef.current);
    }, []);

    useEffect(() => {
        if(playgroundInterface.activeMethod == "pointer") {
            setCursorStyle("cursor-fancy")
        } else if(playgroundInterface.activeMethod == "grab") {
            setCursorStyle("cursor-grab");
        }

        drawPlayground(playgroundInterface, canvasContextRef.current!);
    }, [playgroundInterface]);


    function pointerDown(e: PointerEvent<HTMLCanvasElement>) {
        if (playgroundInterface.activeMethod == "frame") {
            let frame = new Frame({ x: e.clientX, y: e.clientY }, 0, 0);
            setStartPoint({ x: e.clientX, y: e.clientY });
        } else if (playgroundInterface.activeMethod == "grab") {
            setCursorStyle("cursor-grabbing");
        }
        setIsPointerHeld(true);
    }

    function pointerMove(e: PointerEvent<HTMLCanvasElement>) {
        if(playgroundInterface.activeMethod == "pointer") {
            playgroundInterface.elements.forEach(ele => {
                if(ele.type == "frame" && ele.visible) {
                    if ((ele.frame.position.x < e.clientX && e.clientX < ele.frame.position.x + ele.frame.width) && (ele.frame.position.y < e.clientY && ele.frame.position.y+ele.frame.height > e.clientY)) {
                        
                        let ctx = canvasContextRef.current!;
                        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                        
                        ctx.strokeStyle = "rgba(0, 100, 255, .5)";
                        ctx.lineWidth = 2;
                        drawPlayground(playgroundInterface, canvasContextRef.current!);
                        ctx.strokeRect(ele.frame.position.x, ele.frame.position.y, ele.frame.width, ele.frame.height);
                    }
                }
            })
        }
        if (isPointerHeld) {
            let ctx = canvasContextRef.current!;
            if (playgroundInterface.activeMethod == "frame") {
                ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                drawPlayground(playgroundInterface, canvasContextRef.current!);
                ctx.fillStyle = "rgba(69, 69, 69, .4)";
                ctx.fillRect(startPoint.x, startPoint.y, e.clientX - startPoint.x, e.clientY - startPoint.y);
            }
        }

        if(playgroundInterface.activeMethod == "pointer") {
            for(let i=0; i<playgroundInterface.elements.length; i++) {
                let ele = playgroundInterface.elements[i];
                if(ele.type == "frame") {
                    if ((ele.frame.position.x < e.clientX && e.clientX < ele.frame.position.x + ele.frame.width) && (ele.frame.position.y < e.clientY && ele.frame.position.y+ele.frame.height > e.clientY)) {
                        
                        let ctx = canvasContextRef.current!;
                        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                        console.log("out")
                        ctx.strokeStyle = "rgba(0, 100, 255, .5)";
                        ctx.lineWidth = 2;
                        drawPlayground(playgroundInterface, canvasContextRef.current!);
                        ctx.strokeRect(ele.frame.position.x, ele.frame.position.y, ele.frame.width, ele.frame.height);
                        break
                    }
                }
            }
        }
    
    }

    function pointerUp(e: PointerEvent<HTMLCanvasElement>) {
        let ctx = canvasContextRef.current!;
        setIsPointerHeld(false);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        drawPlayground(playgroundInterface, canvasContextRef.current!);
        if (playgroundInterface.activeMethod == "frame") {
            let shape = new Frame({ x: startPoint.x, y: startPoint.y }, e.clientX - startPoint.x, e.clientY - startPoint.y);
            let frameNum = 1;
            playgroundInterface.elements.forEach(ele => {
                if(ele.type == "frame") {
                    frameNum++;
                }
            })
            setPlaygroundInterface({ ...playgroundInterface, elements: [{type: "frame", frame: shape, visible: true, elements: [], name: `Frame #${frameNum}`}, ...playgroundInterface.elements], activeElement: `Frame #${frameNum}` });
        } else if (playgroundInterface.activeMethod == "grab") {
            setCursorStyle("cursor-grab");
        }

        if(playgroundInterface.activeMethod == "pointer") {
            for(let i=0; i<playgroundInterface.elements.length; i++) {
                let ele = playgroundInterface.elements[i];
                if(ele.type == "frame") {
                    if ((ele.frame.position.x < e.clientX && e.clientX < ele.frame.position.x + ele.frame.width) && (ele.frame.position.y < e.clientY && ele.frame.position.y+ele.frame.height > e.clientY)) {
                        
                        let ctx = canvasContextRef.current!;
                        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                        console.log("out")
                        drawPlayground(playgroundInterface, canvasContextRef.current!);
                        setPlaygroundInterface({...playgroundInterface, activeElement: ele.name});
                        break;
                    }
                }
            }
        }
    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <canvas className={"bg-black bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:32px_32px]" + ` ${cursorStyle}`} onPointerDown={(e) => pointerDown(e)} onPointerMove={pointerMove} onPointerUp={pointerUp} ref={canvasRef}>

                </canvas>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>
                    Generate Image
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}