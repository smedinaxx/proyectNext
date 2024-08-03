import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useSession, signOut } from "next-auth/react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((count, product) => count + product.quantity, 0);
  const { data: session } = useSession(); // Obtener sesión actual

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-20 border-b border-lime-700 shadow-xl shadow-lime-900 py-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href="/">
                <Image
                  src="/smedinaxlogo.JPG"
                  width={180}
                  height={30}
                  alt="logo"
                  className="my_logo focus:border-none active:border-none hover:brightness-125 sepia-0 hover:sepia"
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={25} height={25} alt="close icon" />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={25}
                      height={25}
                      alt="menu icon"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-3 text-base text-neutral-400 py-2 md:px-6 text-center border-b md:border-b-0 hover:text-white border-lime-700 md:hover:text-white md:hover:bg-transparent">
                  <Link href="#setup" onClick={() => setNavbar(!navbar)}>
                    SETUP
                  </Link>
                </li>
                <li className="pb-3 text-base text-neutral-400 py-2 px-6 text-center border-b md:border-b-0 hover:text-white border-lime-700 md:hover:text-white md:hover:bg-transparent">
                  <Link href="#products" onClick={() => setNavbar(!navbar)}>
                    PRODUCTS
                  </Link>
                </li>
                <li className="pb-3 text-base text-neutral-400 py-2 px-6 text-center border-b md:border-b-0 hover:text-white border-lime-700 md:hover:text-white md:hover:bg-transparent top-0">
                  <Link href="#newproducts" onClick={() => setNavbar(!navbar)}>
                    NEW PRODUCTS
                  </Link>
                </li>
                <li className="pb-3 text-base text-neutral-400 py-2 px-6 text-center border-b md:border-b-0 hover:text-white border-lime-700 md:hover:text-white md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    CONTACT US
                  </Link>
                </li>
                <li className="pb-3 text-base text-neutral-400 py-2 px-6 text-center border-b md:border-b-0 hover:text-white border-lime-700 md:hover:text-white md:hover:bg-transparent flex items-center justify-center">
                  <Link href="/cart" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center">
                      <Image
                        src="/cart.svg"
                        width={20}
                        height={20}
                        alt="cart"
                        className="filter invert ml-2"
                      />
                      <span className='ml-2'> ({totalItems})</span>
                    </div>
                  </Link>
                </li>
                {session && (
                  <li className="pb-3 text-base text-neutral-400 py-2 px-6 text-center border-b md:border-b-0 hover:text-white border-lime-700 md:hover:text-white md:hover:bg-transparent flex items-center">
                    <Image
                      src={session.user.image}
                      width={30}
                      height={30}
                      alt={session.user.name}
                      className="rounded-full mr-2"
                      unoptimized
                    />
                    <span>{session.user.name}</span>
                    <button
                      onClick={() => signOut()}
                      className="ml-4 text-lime-500 hover:underline"
                    >
                      Sign out
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
