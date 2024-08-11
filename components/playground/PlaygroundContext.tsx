import { createContext } from "react";


interface PlaygroundContextInterface {
    activeMethod: string
}

const PlaygroundContext = createContext<PlaygroundContextInterface>({activeMethod: "pointer"});

export { PlaygroundContext };

