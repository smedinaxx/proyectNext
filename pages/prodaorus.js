import React from "react";
import Layout from "../components/Layout"
import Button from "../components/Button"
import Aorusprod from "../components/emblaCarousel/Aorusprod"
import Aorusprod2 from "../components/emblaCarousel/Aorusprod2"

export default function Home() {
    return (
        <div className="bg-neutral-900 text-white text-md">
            <Layout>
                <div className="pt-28 text-center mx-2">

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6">
                    <h1 className="text-md px-4 font-bold">LAPTOP GIGABYTE AORUS 17H</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">17.3 Pulgadas FHD1920x1080 visualización de 360Hz, NVIDIA GeForce RTX 4080 portátil GPU 12GB GDDR6, Intel Core i7-13700H, 16GB DDR5 RAM, 1TB SSD</p>
                    <Aorusprod></Aorusprod>
                    <p>Price: $38,666.00</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6 mb-12">
                    <h1 className="text-md px-4 font-bold mt-8">GIGABYTE X670E AORUS</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">AM5/ LGA 1718/ AMD X670E/ EATX/ /DDR5/Quad M.2, PCIe 5.0/USB 3.2 Gen2X2 Type-C/Intel WiFi 6E/ Intel 2.5GbE LAN/Q-Flash Plus</p>
                    <Aorusprod2></Aorusprod2>
                    <p>Price: $9,460.97</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                </div>
            </Layout>
        </div>
    )
}