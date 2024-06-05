import React from "react";
import Layout from "../components/Layout"
import Button from "../components/Button"
import Nzxtprod from "../components/emblaCarousel/Nzxtprod"
import Nzxtprod2 from "../components/emblaCarousel/Nzxtprod2"

export default function Home() {
    return (
        <div className="bg-neutral-900 text-white text-md">
            <Layout>
                <div className="pt-28 text-center mx-2">

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6">
                    <h1 className="text-md px-4 font-bold">NZXT Gab H7</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">Elite Blanco, ATX</p>
                    <Nzxtprod></Nzxtprod>
                    <p>Price: $3,169.00</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                    <div className="border-b border-neutral-500 mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6 mb-12">
                    <h1 className="text-md px-4 font-bold mt-8">NZXT Keyboard</h1>
                    <p className="mt-2 pb-4 px-4 text-xs">TKL White ANSI US</p>
                    <Nzxtprod2></Nzxtprod2>
                    <p>Price: $2,551.78</p>
                    <Button buttonText={"Add to cart"}></Button>
                    </div>

                </div>
            </Layout>
        </div>
    )
}