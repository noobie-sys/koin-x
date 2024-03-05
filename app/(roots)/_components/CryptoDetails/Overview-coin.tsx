'use client'

import { Triangle } from "lucide-react"

export const Overview = () => {
    return (
        <div className="w-full mb-20 ">
            <h1 className="text-2xl font-semibold tracking-tight">Performance</h1>
            <div className="flex w-full">
                <div className="today-performance flex w-full h-40 items-center  ">
                    <div className="grow text-left font-light text-lg tracking-wider ">
                        <h1 className="pb-4">Today&apos;s Low</h1>
                        <span className="font-bold tracking-widest pl-0.5">46,400.45</span>
                    </div>
                    <div className="grow-[10] flex justify-center h-full flex-col items-center  ">
                        <div className="w-full h-[8px] bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-full mt-4" />
                        <span className="flex flex-col gap-4 items-center mt-1 ">
                            <Triangle className="w-5 h-4 fill-black" />
                            <span className="text-xl font-light tracking-widest">$46,400.83</span>
                        </span>
                    </div>
                    <div className="grow text-right font-light text-lg tracking-wider ">
                        <h1 className="pb-4">Today&apos;s High</h1>
                        <span className="font-bold tracking-widest">49343.33</span>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="flex w-full">
                <div className="today-performance flex w-full items-center  ">
                    <div className="grow text-left font-light text-lg tracking-wider ">
                        <h1 className="pb-4">52W Low</h1>
                        <span className="font-bold tracking-widest pl-0.5">46,400.45</span>
                    </div>
                    <div className="grow-[10] flex justify-center h-full flex-col items-center  ">
                        <div className="w-full h-[8px] bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-full mt-4" />
                        <span className="flex flex-col gap-4 items-center mt-1 ">
                            <Triangle className="w-5 h-4 fill-black" />
                            <span className="text-xl font-light tracking-widest">$46,400.83</span>
                        </span>
                    </div>
                    <div className="grow text-right font-light text-lg tracking-wider ">
                        <h1 className="pb-4">52 High</h1>
                        <span className="font-bold tracking-widest">49343.33</span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}


// background: linear-gradient(90deg, rgba(236,83,83,1) 0%, rgba(214,164,86,1) 50%, rgba(56,199,105,1) 94%)