// import Image from "next/image";

export default function SlideShow() {
    return (
        <>
        <main className="w-full inline-flex flex-nowrap overflow-hidden md:grid md:place-content-center">
            <div className="flex md:grid md:w-[80vw] md:grid-cols-3 md:grid-rows-4 md:gap-4 animate-infinite-scroll md:animate-none">
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="hidden md:block overflow-hidden row-span-2 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 group cursor-pointer">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="py-12 px-4">
                        <h1 className="text-2xl text-white font-bold">
                            Meme #1
                        </h1>
                        <h3 className="flex text-white text-lg text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="mx-2 px-2 py-2 rounded-lg">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="hidden md:block overflow-hidden row-span-2 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 group cursor-pointer">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="py-12 px-4">
                        <h1 className="text-2xl text-white font-bold">
                            Meme #1
                        </h1>
                        <h3 className="flex text-white text-lg text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="mx-2 px-2 py-2 rounded-lg">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>


                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden md:w-[80vw] md:grid-cols-3 md:grid-rows-4 md:gap-4 animate-infinite-scroll md:animate-none">
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="hidden md:block row-span-2 rounded-xl bg-gradient-to-tr from-zinc-500 to-zinc-50">

                </div>
                <div className="hidden md:block row-span-2 rounded-xl bg-gradient-to-tr from-zinc-500 to-zinc-50">

                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>


                <div className="relative min-w-[70vw] sm:min-w-[60vw] mx-4 md:mx-0 md:min-w-[10px] aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </main>


        <main className="w-full my-16 inline-flex  md:hidden flex-nowrap overflow-hidden">
            <div className="flex animate-infinite-scroll-right">
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>


                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex animate-infinite-scroll-right">
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>


                <div className="relative min-w-[70vw] sm:min-w-[60vw] md:min-w-[40vw] mx-4 aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
                    <div>
                        <img src="/images/slider/meme1.webp" className="w-full transition ease-out duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 px-4 py-2 z-20">
                        <h1 className="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                            Meme #1
                        </h1>
                        <h3 className="flex text-md items-center font-semi-bold">
                            Floor: 0.01 SOL
                            <span className="px-2">
                                <img src="/solicon.svg" className="w-4" alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export function SlideShow2() {
    return (
        <>
            <div className="w-full my-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-54px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                </ul>
            </div>
            <div className="w-full my-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-20px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll-right">
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll-right" aria-hidden="true">
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                    <li>
                        <SlideCard />
                    </li>
                </ul>
            </div>
        </>
    )
}

function SlideCard() {
    return (
        <div className="rounded-lg w-[75vw] md:w-[200px] overflow-hidden border border-zinc-200/10 py-4 bg-zinc-900">
            <div className="grid place-content-center">
                <img src="/images/slider/meme1.webp" className="w-full aspect-video" />
            </div>
            <div className="py-4 px-4">
                <h1 className="text-2xl font-semibold leading-none tracking-tighter text-white text-balance sm:text-2xl md:text-2xl lg:text-3xl">
                    Meme #1
                </h1>
                <h3 className="flex text-xl items-center font-bold">
                    .01 SOL
                    <span className="px-2">
                        <img src="/solicon.svg" className="w-4" alt="" />
                    </span>
                </h3>
            </div>
        </div>
    )
}

export { SlideCard };