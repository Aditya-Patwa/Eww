import { PointerEvent, MouseEvent } from "react";

// Frame
function framePointerDown(e: PointerEvent<HTMLCanvasElement>) {
    if(e.button == 0) {
        console.log(e.clientX, e.clientY);
    }
}

function framePointerMove(e: PointerEvent<HTMLCanvasElement>) {
    if(e.button == 0) {
        console.log(e.clientX, e.clientY);
    }
}

function framePointerUp(e: PointerEvent<HTMLCanvasElement>) {
    if(e.button == 0) {
        console.log(e.clientX, e.clientY);
    }
}

export { framePointerDown };