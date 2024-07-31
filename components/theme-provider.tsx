"use client";
import { ThemeProvider } from "next-themes";


export default function Themes({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
    )
}