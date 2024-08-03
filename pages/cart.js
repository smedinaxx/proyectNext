import { useCart } from "../context/CartContext";
import Link from "next/link";
import LayoutSimple from "../components/LayoutSimple";
import Image from "next/image";
import { useState } from 'react';

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [cellphone, setCellphone] = useState('');

    // Calcular el total acumulado
    const totalAmount = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    // Función para formatear la moneda
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-neutral-900 min-h-screen flex flex-col">
            <div className="text-neutral-500 grid grid-cols-5 mb-8 mt-24 md:mt-36 sm:mx-24 md:mx-32">
                <Link href="/" className="text-center border-l border-neutral-500 text-lime-700 hover:text-white">HOME</Link>
                <Link href="/cardrazer" className="text-center border-x border-neutral-500 hover:text-white">RAZER</Link>
                <Link href="/cardasus" className="text-center border-r border-neutral-500 hover:text-white">ASUS</Link>
                <Link href="/cardaorus" className="text-center hover:text-white">AORUS</Link>
                <Link href="/cardnzxt" className="text-center border-x border-neutral-500 hover:text-white">NZXT</Link>
            </div>
            <LayoutSimple className="flex-grow">
                {cart.length === 0 ? (
                    <div className="flex flex-col justify-center items-center flex-grow min-h-screen">
                        <p className="text-neutral-400">
                            Your cart is empty.
                        </p>
                        <div className="mt-4">
                            <Link href="/" className="text-xl text-lime-500 hover:text-white">
                                Continue shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-7xl pb-8 flex justify-center">Shopping Summary</h1>
                        <ul className="mx-8">
                            {cart.map(product => (
                                <li key={product.id} className="flex items-center border-b border-gray-600 py-4">
                                    <div className="w-1/2">
                                        <Image
                                            src={product.images[0]?.url}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="w-1/2 pl-4">
                                        <h2 className="text-md md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">{product.name}</h2>
                                        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-amber-200">Price: {formatCurrency(product.price)}</p>
                                        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-white">Quantity: {product.quantity}</p>
                                        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-amber-200">Subtotal: {formatCurrency(product.price * product.quantity)}</p>
                                        <button
                                            className="bg-red-500 text-white py-1 px-4 rounded mt-2"
                                            onClick={() => removeFromCart(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* Mostrar el total acumulado */}
                        <div className="flex justify-center mt-4 text-white text-lg font-semibold">
                            <p className="text-white">Total Amount: {formatCurrency(totalAmount)}</p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                className="ml-4 bg-red-500 text-white py-2 px-6 rounded mb-8"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                        {/* Mostrar el formulario solo si hay productos en el carrito */}
                        <div className="text-black p-2 py-6 rounded-lg shadow-lg w-full max-w-md border border-neutral-500 mb-12">
                            <form onSubmit={handleSubmit} className="bg-transparent flex flex-col text-black">
                                <input
                                    className="mb-4 p-3 border border-gray-300 rounded-md"
                                    type="text"
                                    placeholder="Country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                                <input
                                    className="mb-4 p-3 border border-gray-300 rounded-md"
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <input
                                    className="mb-4 p-3 border border-gray-300 rounded-md"
                                    type="text"
                                    placeholder="Cellphone"
                                    value={cellphone}
                                    onChange={(e) => setCellphone(e.target.value)}
                                />
                                <Link href="/checkout">
                                    <button className="bg-lime-700 text-white py-2 px-6 rounded mb-8">
                                        Checkout
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </>
                )}
            </LayoutSimple>
        </div>
    );
}