"use client"
import * as React from "react";
import { Component, RectangleHorizontal, Circle, Minus, ArrowUpLeft, Shapes, } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const shapes: { title: string; command: string, shape: React.ReactNode }[] = [
    { title: "Rectangle", command: "R", shape: <RectangleHorizontal className="w-4 h-4" /> },
    { title: "Ellipse", command: "C", shape: <Circle className="w-4 h-4" /> },
    { title: "Line", command: "L", shape: <Minus className="w-4 h-4" /> },
    { title: "Arrow", command: "Shift+L", shape: <ArrowUpLeft className="w-4 h-4" /> }
]

export function ShapesMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        <Shapes className="w-4 h-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4">
                            {shapes.map((component, i) => (
                                <div key={i} className="flex justify-between">
                                    <div className="flex mr-10 items-center">
                                        {component.shape}
                                        <h2 className="ml-2">{component.title}</h2>
                                    </div>
                                    <div>
                                        <h3 className="text-white/50">{component.command}</h3>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        <Component className="w-4 h-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="py-2 border-b border-zinc-300/20 px-4">
                            <h1 className="font-bold text-sm">Import Templates</h1>
                        </div>
                        <ul className="grid gap-3 p-4">
                            {shapes.map((component, i) => (
                                <div key={i} className="flex justify-between">
                                    <div className="flex mr-10 items-center">
                                        {component.shape}
                                        <h2 className="ml-2">{component.title}</h2>
                                    </div>
                                    <div>
                                        <h3 className="text-white/50">{component.command}</h3>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
