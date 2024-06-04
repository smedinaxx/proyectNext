import React from "react";
import EmblaCarousel from "../components/emblaCarousel/EmblaCarousel";
import EmblaCarousel2 from "../components/emblaCarousel/EmblaCarousel2";
import Layout from "../components/Layout"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className="bg-neutral-800 text-white text-md">
            <Layout>
                <div className="pt-28 text-center mx-2">

                    <h1 className="text-md px-4 font-bold">ASUS G614JI-AS94 ROG Smtrix G16 2023 Gaming Laptop</h1>
                    <p className="mt-2 px-4 text-xs">FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray</p>
                    <EmblaCarousel></EmblaCarousel>
                    <p>Price: $39,999.00</p>
                    <Button></Button>

                    <h1 className="text-md px-4 font-bold mt-8">ASUS ROG Flow Z13 2022 Gaming Laptop Tablet</h1>
                    <p className="mt-2 px-4 text-xs">13.4” 120Hz IPS Type FHD 16:10 Display, Intel Core i5-12500H CPU, 16GB LPDDR5, 512GB PCIe SSD, Free Bundle Detachable RGB Keyboard, GZ301ZA-PS53, Black</p>
                    <EmblaCarousel2></EmblaCarousel2>
                    <p>Price: $19,599.00</p>
                    <Button></Button>

                </div>
            </Layout>
        </div>
    )
}