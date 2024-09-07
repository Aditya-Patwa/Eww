import Link from "next/link";
import { WalletBtn } from "@/components/WalletBtn";
import { Navbar } from "@/components/NavBar";

export default function Dashboard() {
    return (
        <>
            <header className="w-screen py-4 px-4 flex justify-between items-center border-b border-zinc-800">
                <div>
                    <Link href={"/"} className="font-extrabold text-xl sm:text-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-100">EwwVerse</span>
                    </Link>
                    
                </div>

                <div>
                <ul className="list-style-none hidden md:flex justify-between items-center gap-3">
                        <li>
                            <Link href={"/"} className="font-normal text-sm lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-normal text-sm lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Playground
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-normal text-sm lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Marketplace
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-normal text-sm lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Collections
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-normal text-sm lg:text-xl text-zinc-400 hover:text-zinc-50">
                                Mint
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-2">
                    <WalletBtn />
                    <Navbar/>
                </div>
            </header>
            <h1 className="text-center bg-clip-text py-2 text-6xl font-bold leading-none tracking-tighter text-white text-balance sm:text-7xl md:text-8xl lg:text-8xl">
                This is Dashboard!
            </h1>
        </>
    )
}