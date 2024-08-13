"use client";
import Link from "next/link";
import Playground from "@/components/playground/Playground";
import { ShapesMenu, AIBlock } from "@/components/menubar/menubar";
import { useState } from "react";
import { Type, MousePointer2, Hand, Image, Frame } from "lucide-react";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { PlaygroundContext, PlaygroundContextInterface } from "@/components/playground/PlaygroundContext";

export default function PlaygroundPage() {
    const [playgroundInterface, setPlaygroundInterface] = useState<PlaygroundContextInterface>({ elements: [], activeMethod: "pointer", activeElement: null });

    return (
        <PlaygroundContext.Provider value={{playgroundInterface, setPlaygroundInterface}}>
            <main className="h-screen w-screen overflow-hidden">
                <header className="fixed w-screen grid place-content-center z-10">
                    <nav className="w-screen py-2 px-16 bg-black/40 backdrop-blur-sm border-b border-zinc-100/10 grid justify-center">
                        {/* <div> */}
                        <ToggleGroup type="single" defaultValue={playgroundInterface.activeMethod} onValueChange={(value) => setPlaygroundInterface({...playgroundInterface, activeMethod: value})}>
                            <ToggleGroupItem value="pointer" aria-label="Toggle Pointer">
                                <MousePointer2 className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="frame" aria-label="Toggle Pointer">
                                <Frame className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="grab" aria-label="Toggle hand">
                                <Hand className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="text" aria-label="Toggle type">
                                <Type className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="image" aria-label="Toggle image">
                                <Image className="h-4 w-4" />
                            </ToggleGroupItem>
                            <AIBlock />
                            {/* <ToggleGroupItem value="shape" aria-label="Toggle shape"> */}
                            <ShapesMenu />
                            {/* </ToggleGroupItem> */}
                        </ToggleGroup>
                        {/* </div> */}
                    </nav>
                </header>
                <section className="absolute inset-y-0 py-2 px-4 z-20 w-56 bg-black/40 backdrop-blur-sm border-r border-zinc-100/20">
                    <div>
                        <Link href="/">
                            <h1 className="font-extrabold text-2xl">
                                🤢eww
                            </h1>
                        </Link>
                    </div>
                    <div className="border-t border-zinc-100/20 my-4 mx-auto w-full">
                        <ul>
                            {playgroundInterface.elements.map((element, i) => {
                                if(element.type == "frame") {
                                    return (
                                        <h1 key={i}>
                                            {element.name}
                                        </h1>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </section>
                <Playground />
                <section className="absolute inset-y-0 right-0 p-16 z-20 bg-black/40 backdrop-blur-sm border-l border-zinc-100/20">

                </section>
            </main>
        </PlaygroundContext.Provider>
    )
}