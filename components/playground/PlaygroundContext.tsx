import { createContext } from "react";
import Frame from "./elements/Frame";
import { Rectangle, Arc, Polygon } from "./elements/Shapes";

export interface Layer {
    name: string,
    content: Rectangle | Arc | Polygon,
    type: "layer",
    visible: true,
}

export interface Group {
    name: string,
    content: (Group | Layer)[],
    type: "group",
    visible: true
}
export interface FrameBase {
    name: string,
    frame: Frame,
    elements: (Group | Layer)[],
    visible: true,
    type: "frame"
}

export interface PlaygroundContextInterface {
    elements: (FrameBase | Group | Layer)[],
    activeElement: string | null,
    activeMethod: string
}

interface PC {
 playgroundInterface: PlaygroundContextInterface, setPlaygroundInterface: Function
}


const PlaygroundContext = createContext<PC>({playgroundInterface: {elements: [], activeMethod: "ponter", activeElement: null}, setPlaygroundInterface: () => {}});

export { PlaygroundContext };

