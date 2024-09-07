import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="mx-2">
                    <Menu />
                </button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Link href={"/"} className="font-extrabold text-xl sm:text-2xl">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-600">EwwVerse</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        An NFT marketplace for your memes on <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Solana</span>
                    </SheetDescription>
                </SheetHeader>
                <h1>
                    This is Sheet
                </h1>
            </SheetContent>
        </Sheet>
    )
}
