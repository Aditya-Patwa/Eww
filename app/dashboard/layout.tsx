"use client";
import { motion } from "framer-motion";
import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import { WalletBtn } from "@/components/WalletBtn";
import { Navbar } from "@/components/NavBar";
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplCore } from '@metaplex-foundation/mpl-core'
import { umiContext } from "@/components/UmiContext";
// @ts-ignore
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const wallet = useWallet();
    const umi = createUmi('https://api.devnet.solana.com').use(mplCore()).use(walletAdapterIdentity(wallet));

    return (
        <>
            {wallet.connected ? (
                <main>
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
                                    <Link href={"/dashboard/playground"} className="font-normal text-sm lg:text-xl text-zinc-400 hover:text-zinc-50">
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

                        <div className="flex gap-2 mx-2">
                            <WalletBtn />
                            <Navbar />
                        </div>
                    </header>
                    <umiContext.Provider value={umi}>
                        {children}
                    </umiContext.Provider>
                </main>
            ) : (
                <main>
                    <header className="w-screen absolute top-0 py-3 px-4 sm:px-12 md:px-16 bg-zinc-black/30 flex justify-between items-center z-30">
                        <div>
                            <Link href={"/"} className="font-extrabold text-xl sm:text-2xl">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-600">EwwVerse</span>
                            </Link>
                        </div>

                        <div>
                            <WalletBtn />
                        </div>
                    </header>

                    {/* <section className="w-screen min-h-[80vh] grid place-content-center"> */}
                    <div className="grid place-content-center min-h-screen w-screen bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                        <motion.h1 transition={{ duration: .75, delay: .2 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-2 text-6xl font-bold leading-none tracking-tighter text-white text-balance sm:text-7xl md:text-8xl lg:text-8xl">
                            Wallet Not Connected!
                        </motion.h1>

                        <motion.h1 transition={{ duration: .5, delay: .55 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-2 text-xl font-normal tracking-tighter text-zinc-400 text-balance sm:text-xl md:text-2xl lg:text-3xl px-3">
                            Connect to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Solana</span> wallet.
                        </motion.h1>
                        <motion.div transition={{ duration: .75, delay: .75 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 flex justify-center my-2">
                            <WalletBtn />
                        </motion.div>
                    </div>
                    {/* </section> */}
                </main>
            )}
        </>
    )
}