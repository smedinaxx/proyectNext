import { useCart } from "../context/CartContext";
import Link from "next/link";
import LayoutSimple from "../components/LayoutSimple";
import Image from "next/image"; 

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

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

    return (
        <div className="bg-neutral-900 pt-24 pb-8 px-4">
    <div className="text-neutral-500 grid grid-cols-5 mb-8 md:mt-8 sm:mx-24 md:mx-32">
      <Link href="/" className="text-center border-l border-neutral-500 text-lime-700 hover:text-white">HOME</Link>
      <Link href="/cardrazer" className="text-center border-x border-neutral-500 hover:text-white">RAZER</Link>
      <Link href="/cardasus" className="text-center border-r border-neutral-500 hover:text-white">ASUS</Link>
      <Link href="/cardaorus" className="text-center hover:text-white">AORUS</Link>
      <Link href="/cardnzxt" className="text-center border-x border-neutral-500 hover:text-white">NZXT</Link>
    </div>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-7xl pb-8 flex justify-center">Shopping Summary</h1>
            <LayoutSimple>
                {cart.length === 0 ? (
                    <p className="text-white pb-4">
                    Your cart is empty. 
                    <span className="mx-8">
                      <Link href="/" className="text-neutral-400 hover:text-white">Continue shopping</Link>
                    </span>
                  </p>
                  
                ) : (
                    <>
                        <ul>
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
                            <Link href="/checkout">
                                <button className="bg-lime-700 text-white py-2 px-6 rounded mb-8">
                                    Checkout
                                </button>
                            </Link>
                            <button
                                className="ml-4 bg-red-500 text-white py-2 px-6 rounded mb-8"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </LayoutSimple>
        </div>
    );
}
