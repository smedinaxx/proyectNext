import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Button from "../components/Button";
import Layout from "../components/Layout";
import toast from "react-hot-toast";

export default function Test() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const sendEmail = async () => {
        const data = {
            name: "Saul Medina",
            email: "saul_medinax@hotmail.com",
            message: "eres un ser de luz",
        };
        await axios.post("/api/mail", data);
        toast.success("Email sent");
    };

    return (
        <Layout>
            
            <div className="bg-black text-start pb-6 pt-24">
            <input className="mx-6 px-4 py-1" type="email" placeholder="Email" />
            <button onClick={sendEmail} className="ml-2 text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 p-2 top-0 left-0">
                Enviar mail
            </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 bg-neutral-950 text-white pt-12 gap-6 px-4 pb-6">
                {products &&
                    products.length > 0 &&
                    products.map((product) => (
                        <div key={product.id} className="bg-neutral-500 rounded-lg overflow-hidden w-2/3 sm:w-1/2 md:w-10/12 lg:w-full mx-auto">
                            <div className="relative w-full h-60">
                                <Image
                                    className="object-contain hover:scale-105 bg-white transition duration-500 ease-in-out"
                                    unoptimized
                                    src={product.image}
                                    alt={product.name}
                                    layout="fill"
                                />
                            </div>
                            <div className="mt-2 text-center">
                                <h2 className="text-sm font-semibold text-center">{product.title}</h2>
                                <Button>Buy now</Button>
                            </div>
                        </div>
                    ))}
            </div>
        </Layout>
    );
}