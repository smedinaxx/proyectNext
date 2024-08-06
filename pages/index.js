import React from 'react';
import { useSession } from 'next-auth/react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import NewProducts from '../components/NewProducts';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <div className='mt-16'>
      </div>
      <NavBar />
      <section
        id="setup"
        className="bg-black text-center flex relative mt-18 md:mt-20">
        <Banner />
        <div className='w-full absolute z-10 top-1/4 md:top-1/3 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-2 mt-16'>ALL THE BEST COMPONENTS</h1>
          <p className='text-lg text-white md:text-3xl lg:text-4xl mb-12'>FOR YOUR SETUPS</p>
          <div className='text-center'>
            <Link href={"/setupconfig"}>
              <button className='text-white text-sm border border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 px-8'>Explore our creations</button>
            </Link>
          </div>
        </div>
      </section>

      {!session && (
        <div className="bg-gradient-to-r from-black to-neutral-700 text-center pb-6 py-6">
          <h1 className='text-white text-3xl'>Do you have an account?</h1>
          <p className='text-white'>
            <Link href={"/register"} className='text-lime-400 underline underline-offset-4'>Sign in</Link> to complete your purchases faster
          </p>
        </div>
      )}

      <h1 className='text-2xl text-white text-center bg-black py-6'>PRODUCTS BY TOP BRANDS</h1>
      <section id="products" className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-8 sm:px-12 md:px-20 lg:px-20 xl:px-20 bg-gradient-to-r from-neutral-700 to-black py-6">
        <Card imageUrl='/productscards/asus.jpg' title='ASUS ROG PRODUCTS' details='In Search of Incredible.' linkUrl={'cardasus'} />
        <Card imageUrl='/productscards/nzxt.png' title='NZXT PRODUCTS' details='For Gamers. By Gamers.' linkUrl={'cardnzxt'} />
        <Card imageUrl='/productscards/razer1.jpg' title='RAZER PRODUCTS' details='For Gamers. By Gamers.' linkUrl={'cardrazer'} />
        <Card imageUrl='/productscards/aourus.jpg' title='AOURUS PRODUCTS' details='Unleash the Gaming Power' linkUrl={'cardaorus'} />
      </section>
      
      <section
        id="newproducts"
        className="text-white bg-black text-center flex pt-12">
        <NewProducts />
      </section>

      <section id="contact" className="grid grid-cols-1 sm:grid-cols-2 text-white bg-gradient-to-r from-neutral-900 to-black text-center py-12 px-6">
        <div className="flex">
          <div className="mx-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Schedule your appointment</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mt-8 text-justify mb-6">Fill out the form below, so that an expert can contact you in order to guide you in the acquisition of components and offer you the assembly of the same</p>
          </div>
        </div>
        <div className="order-last sm:order-last">
          <ContactForm />
        </div>
      </section>
      
      <section>
        <Footer />
      </section>
    </div>
  );
}
