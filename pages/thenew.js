import React from "react";
import LayoutSimple from "../components/LayoutSimple";
import Button from "../components/Button";
import Link from "next/link";

const Home = () => {
    return (
        <LayoutSimple>
            <div className="px-4 pb-12 sm:px-6 mt-20 md:mt-20 bg-gradient-to-r from-neutral-700 to-black">
                <h1 className="text-center text-2xl md:text-4xl text-white pb-4 pt-12">NEW ARRIVALS, JUST FILL THE FORM & ORDER NOW</h1>

                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-4 my-4 xl:mx-40">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative flex-1 max-w-xl p-2 z-10">
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/ShbKaX1lfvU?si=apEUqH3hwDTatMPu"
                            frameBorder="0"
                            allowFullScreen
                            title="New Arrival Video"
                        />
                    </div>

                    <div className="relative flex-1 max-w-xl z-10">
                        <div className="relative z-10 text-white p-4">
                            <h1 className="font-bold mb-4 text-xl text-justify">Razer Blade 16” | Worlds First OLED 240 Hz</h1>
                            <p className="text-justify">Meet the new Razer Blade 16—featuring the worlds first OLED 240 Hz 16” display. Armed with the latest @intelgaming Core i9 HX Series processor, experience more power per cubic inch than ever before.</p>
                            <Link href={"/#contact"}>
                            <Button buttonText={"Order Now"}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-4 my-4 xl:mx-40">
                    <div className="absolute inset-0 bg-white opacity-20"></div>
                    <div className="relative flex-1 max-w-xl p-2 z-10">
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/W7vZEi6xR8Q?si=wqXX5_DQsKaDvIqn"
                            frameBorder="0"
                            allowFullScreen
                            title="New Arrival Video"
                        />
                    </div>

                    <div className="relative flex-1 max-w-xl z-10">
                        <div className="relative z-10 text-white p-4">
                        <h1 className="font-bold mb-4 text-xl text-justify">Razer Cobra Line | Perfected for Play</h1>
                        <p className="text-justify">From vivid Razer Chroma RGB to cutting-edge customizability and connectivity, get the performance, flair, and freedom you need with all-rounded gaming mice that are perfected for play.</p>
                        <Link href={"/#contact"}>
                            <Button buttonText={"Order Now"}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-4 my-4 xl:mx-40">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative flex-1 max-w-xl p-2 z-10">
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/fskUgbAq5HY?si=adtaL8eXIGRCmCRe"
                            frameBorder="0"
                            allowFullScreen
                            title="New Arrival Video"
                        />
                    </div>

                    <div className="relative flex-1 max-w-xl z-10">
                        <div className="relative z-10 text-white p-4">
                            <h1 className="font-bold mb-4 text-xl text-justify">Razer Cthulhu | The Ultimate Gaming Chair</h1>
                            <p className="text-justify">Never have to leave your chair again as eight independent robotic arms cater to your every need.</p>
                            <Link href={"/#contact"}>
                            <Button buttonText={"Order Now"}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-4 my-4 xl:mx-40">
                    <div className="absolute inset-0 absolute inset-0 bg-white opacity-20"></div>
                    <div className="relative flex-1 max-w-xl p-2 z-10">
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/nBSjuUYLAX0?si=UWKXhtmve4soArqM"
                            frameBorder="0"
                            allowFullScreen
                            title="New Arrival Video"
                        />
                    </div>

                    <div className="relative flex-1 max-w-xl z-10">
                        <div className="relative z-10 text-white p-4">
                            <h1 className="font-bold mb-4 text-xl text-justify">AORUS GeForce RTX™ 40 Series</h1>
                            <p className="text-justify">Hitting the apex in gaming with the apex of cooling. This is the all-new AORUS GeForce RTX™ 40 Series graphics card.</p>
                            <Link href={"/#contact"}>
                            <Button buttonText={"Order Now"}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutSimple>
    );
};

export default Home;
