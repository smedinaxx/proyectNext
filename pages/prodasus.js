import React from "react";
import Asusprod from "../components/emblaCarousel/Asusprod";
import Asusprod2 from "../components/emblaCarousel/Asusprod2";
import Layout from "../components/Layout"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className="bg-neutral-900 text-white text-md">
            <Layout>
                <div className="pt-28 text-center mx-2">

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6">
                    <h1 className="text-md px-4 font-bold">ASUS G614JI-AS94 ROG Smtrix G16 2023 Gaming Laptop</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray</p>
                    <Asusprod></Asusprod>
                    <p>Price: $39,999.00</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6 mb-12">
                    <h1 className="text-md px-4 font-bold mt-8">ASUS ROG Flow Z13 2022 Gaming Laptop Tablet</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">13.4” 120Hz IPS Type FHD 16:10 Display, Intel Core i5-12500H CPU, 16GB LPDDR5, 512GB PCIe SSD, Free Bundle Detachable RGB Keyboard, GZ301ZA-PS53, Black</p>
                    <Asusprod2></Asusprod2>
                    <p>Price: $19,599.00</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                </div>
            </Layout>
        </div>
    )
}