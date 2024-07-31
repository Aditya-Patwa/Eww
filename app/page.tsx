"use client";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <>
      <div
        className="absolute grid p-4 place-content-center inset-0 h-full w-full bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      >
        <motion.h1 transition={{duration: .75}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} className="opacity-0 text-center bg-clip-text py-3 text-6xl font-bold leading-none tracking-tighter text-white text-balance sm:text-7xl md:text-8xl lg:text-8xl">
          Incentivize your Memes
        </motion.h1>
        <motion.h1 transition={{duration: .5, delay: .35}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} className="opacity-0 text-center bg-clip-text py-3 text-xl font-normal tracking-tighter text-zinc-400 text-balance sm:text-xl md:text-2xl lg:text-3xl">
          An NFT marketplace for your memes
        </motion.h1>
      </div>
    </>
  );
}
