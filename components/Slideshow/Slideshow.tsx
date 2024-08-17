// import Image from "next/image";

export default function SlideShow() {
    return (
        <main className="grid place-content-center">
            <div className="grid w-[80vw] grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4">
                <div className="aspect-video rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div>
                <div className="aspect-video rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div>
                <div className="row-span-2 rounded-xl bg-gradient-to-tr from-zinc-500 to-zinc-50">

                </div>
                <div className="row-span-2 rounded-xl bg-gradient-to-tr from-zinc-500 to-zinc-50">

                </div>
                <div className="aspect-video rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div>
                <div className="aspect-video rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div>


                <div className="relative aspect-video overflow-hidden group cursor-pointer rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">
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
                {/* <div className="md:col-span-2 p-8 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 grid md:grid-cols-3 gap-2">
                    <div className="md:col-span-1 rounded-lg overflow-hidden">
                        <img src="/images/slider/meme1.webp" className="w-full aspect-video" />
                    </div>
                    <div>
                        <div className="py-4 px-8">
                            <h1 className="text-2xl font-normal leading-none tracking-tighter text-white text-balance sm:text-2xl md:text-2xl lg:text-3xl">
                                Meme #1
                            </h1>
                            <h3 className="flex text-xl items-center font-bold my-2">
                                .01 SOL
                                <span className="px-2">
                                    <img src="/solicon.svg" className="w-4" alt="" />
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div>
                        <div className="grid place-content-center">
                            <div>
                            <h3 className="flex text-xl items-center font-thin my-2">
                                Minted by 
                                <span className="px-2 flex items-center text-sm">
                                    <div className="w-4 h-4 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-400">

                                    </div>
                                    <div className="px-1">
                                        xA0374...
                                    </div>
                                </span>
                            </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:row-span-2 p-8 rounded-xl bg-gradient-to-tr from-zinc-500 to-zinc-50">

                </div>
                <div className="p-8 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div>
                <div className="p-8 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div>
                <div className="md:row-span-2 p-8 rounded-xl bg-gradient-to-tr from-zinc-500 to-zinc-50">

                </div>
                <div className="md:col-span-2 row-span-2 p-8 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800">

                </div> */}
            </div>
        </main>
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