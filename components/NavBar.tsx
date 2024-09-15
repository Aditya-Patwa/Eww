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
import {WalletBtn} from "./WalletBtn";
import { Separator } from "@/components/ui/separator"


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
                        An NFT marketplace for your memes on <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Solana</span>
                    </SheetDescription>
                </SheetHeader>
                <main className="py-6">
                    <ul className="list-style-none">
                        <li className="px-3">
                            <Link href={"/"} className="font-normal text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Dashboard
                            </Link>
                        </li>
                        <Separator className="my-1.5" />
                        <li className="px-3">
                            <Link href={"/dashboard/playground"} className="font-normal text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Playground
                            </Link>
                        </li>
                        <Separator className="my-1.5" />
                        <li className="px-3">
                            <Link href={"/"} className="font-normal text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Marketplace
                            </Link>
                        </li>
                        <Separator className="my-1.5" />
                        <li className="px-3">
                            <Link href={"/"} className="font-normal text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Collections
                            </Link>
                        </li>
                        <Separator className="my-1.5" />
                        <li className="px-3">
                            <Link href={"/dashboard/new"} className="font-normal text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Mint
                            </Link>
                        </li>
                    </ul>
                </main>
                <SheetFooter>
                    <WalletBtn />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
