import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const NewArrivals = () => {
    return (
        <Layout>
            <div className="px-4 sm:px-6 mt-16 sm:mt-16 md:mt-20 bg-gradient-to-r from-neutral-700 to-black">
                <h1 className="text-center text-2xl md:text-4xl text-white pb-4 pt-12">NEW ARRIVALS</h1>

                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-8 my-4">
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
                            <h1>NI NININI NIII NIII</h1>
                            <p>sjsjsjs jsjsj jsjsj jsjj sjjsj jsjsjsjjss jsjjsj sjj</p>
                            <Button buttonText={"Order Now"}/>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-8 my-4">
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
                            <h1>NI NININI NIII NIII</h1>
                            <p>sjsjsjs jsjsj jsjsj jsjj sjjsj jsjsjsjjss jsjjsj sjj</p>
                            <Button buttonText={"Order Now"}/>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-8 my-4">
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
                            <h1>NI NININI NIII NIII</h1>
                            <p>sjsjsjs jsjsj jsjsj jsjj sjjsj jsjsjsjjss jsjjsj sjj</p>
                            <Button buttonText={"Order Now"}/>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-center md:space-x-4 py-8 my-4">
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
                            <h1>NI NININI NIII NIII</h1>
                            <p>sjsjsjs jsjsj jsjsj jsjj sjjsj jsjsjsjjss jsjjsj sjj</p>
                            <Button buttonText={"Order Now"}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NewArrivals;
