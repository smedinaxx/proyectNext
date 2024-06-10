import React from "react";
import LayoutSimple from "../components/LayoutSimple"
import Button from "../components/Button"
import Razerprod from "../components/emblaCarousel/Razerprod";
import Razerprod2 from "../components/emblaCarousel/Razerprod2";

export default function Home() {
    return (
        <div className="bg-neutral-900 text-white text-md">
            <LayoutSimple>
                <div className="pt-28 text-center mx-2">

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6">
                    <h1 className="text-md px-4 font-bold">Razer BlackWidow V4 Pro</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">Mechanical Gaming Keyboard Yellow Switch - US Layout - NASA</p>
                    <Razerprod2></Razerprod2>
                    <p>Price: $4,328.96</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6 mb-12">
                    <h1 className="text-md px-4 font-bold mt-8">ARazer Blade 15 Gaming Laptop</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4</p>
                    <Razerprod></Razerprod>
                    <p>Price: $39,532.25</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                </div>
                </LayoutSimple>
        </div>
    )
}