"use client";
import { motion } from "framer-motion";

export default function Success({params}: {params: {id: string}}) {
    return (
        <main>
            <div className="grid place-content-center min-h-screen w-screen bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                <motion.h1 transition={{ duration: .75, delay: .2 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-2 text-4xl font-bold leading-none tracking-tighter text-white text-balance sm:text-5xl md:text-7xl lg:text-7xl">
                    Your meme has been immortalized. <br /> Congratulations!🥳
                </motion.h1>

                <motion.h1 transition={{ duration: .5, delay: .55 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-4 text-xl font-normal tracking-tighter text-zinc-400 text-balance sm:text-xl md:text-2xl lg:text-3xl px-3">
                Share your meme with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">galaxy</span> and beyond! 
                </motion.h1>

                <motion.div transition={{ duration: .75, delay: .75 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 flex justify-center my-2">
                    
                </motion.div>
            </div>
        </main>
    )
}