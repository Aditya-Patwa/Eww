"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Home() {
  const [emojies, setEmojies] = useState<any[]>([]);

  useEffect(() => {
    let myemojies = [];
    let allEmojies = ["🤢", "😝", "💩", "😵", "🤯", "🤣", "🤩", "🤮", "🤑", "😭", "😨", "😡", "🥳", "🥸", "🤠", "🤡", "😈", "👹"];

    for (let i = 0; i < 50; i++) {
      let randomX = getRandomArbitrary(0, window.innerWidth);

      myemojies.push({emoji: allEmojies[Math.floor(Math.random()*allEmojies.length)], transition: {duration: getRandomArbitrary(3, 7), delay: getRandomArbitrary(0, .1)}, initial: {x: randomX}, animate: {rotateZ: [getRandomArbitrary(-45, 45), getRandomArbitrary(-45, 45), getRandomArbitrary(-45, 45), getRandomArbitrary(-45, 45)], x:[randomX+getRandomArbitrary(-30, 30), randomX+getRandomArbitrary(-30, 30), randomX+getRandomArbitrary(-30, 30)]}});
    }

    setEmojies([...myemojies]);
  }, []);

  return (
    <>
      <div className="absolute h-screen w-screen top-0 overflow-hidden">
        <AnimatePresence>
          {emojies.map((emoji, i) => {
            return (
              <motion.ul key={i} transition={{ duration: emoji.transition.duration, delay: emoji.transition.delay, repeat: Infinity, repeatDelay: .1, type: "spring", ease: "backOut" }} initial={{ opacity: 1, y: 100, x: emoji.initial.x }} animate={{ opacity: 0, rotateZ: emoji.animate.rotateZ, x: emoji.animate.x, y: -200 }} exit={{ opacity: 0 }}  className="absolute bottom-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {emoji.emoji}
              </motion.ul>
            )
          })}
        </AnimatePresence>
      </div>
      <div className="grid place-content-center min-h-screen w-screen bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
        <motion.div transition={{ duration: .75, delay: 0 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 grid justify-center my-2">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
            <span className="text z-10 text-[#cbd5e1]">Memes that makes you 😝</span>
          </button>
        </motion.div>
        <motion.h1 transition={{ duration: .75, delay: .2 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-2 text-6xl font-bold leading-none tracking-tighter text-white text-balance sm:text-7xl md:text-8xl lg:text-8xl">
          Incentivize your Memes
        </motion.h1>
        <motion.h1 transition={{ duration: .5, delay: .55 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-2 text-xl font-normal tracking-tighter text-zinc-400 text-balance sm:text-xl md:text-2xl lg:text-3xl px-3">
          An NFT marketplace for your memes on <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Solana</span>
        </motion.h1>
        <motion.div transition={{ duration: .75, delay: .75 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 flex justify-center my-2">
          <Link href={"#"} className="mt-3 py-1.5 px-4 rounded-md bg-white text-black">
            Get started
          </Link>
          <Link href={"#"} className="mt-3 py-1.5 px-4 rounded text-white flex gap-1 items-center group">
            Learn more
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right transition duration-200 ease-in-out group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </Link>
        </motion.div>
      </div>

      <section className="relative w-screen h-screen grid place-content-center p-4">
        <div className="absolute top-0 h-screen w-screen -z-10">
          <div className="absolute w-screen top-0 flex justify-between px-2">
            <div className="w-10 h-10">
            </div>
            <div className="w-10 h-10">

            </div>
          </div>
          <div className="absolute w-screen bottom-0 flex justify-between px-2">
            <div className="w-10 h-10">

            </div>
            <div className="w-10 h-10">

            </div>
          </div>
        </div>
        <motion.h1 transition={{ duration: .75, delay: .35 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="opacity-0 text-center bg-clip-text py-2 text-5xl font-bold leading-none tracking-tighter text-white text-balance sm:text-7xl md:text-8xl lg:text-8xl">
          Cryptoverse is nothin without memes
        </motion.h1>
      </section>
    </>
  );
}
