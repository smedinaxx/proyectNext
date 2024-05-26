import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import NewProducts from '../components/NewProducts';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import LoginButton from '../components/LoginButton';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='mt-16'>
      </div>
      <NavBar />
      <section
        id="setup"
        className="bg-black text-center flex relative mt-18">
        <Banner></Banner>
        <div className='w-full absolute z-10 top-1/4 md:top-1/3 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-2'>ALL THE BEST COMPONENTS</h1>
          <p className='text-lg text-white md:text-3xl lg:text-4xl mb-12'>FOR YOUR SETUPS</p>
          <div className='text-center'>
            <Link href={"/test"}>
          <button className='text-white text-sm border border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 px-16'>Click here</button>
          </Link>
        </div>
        </div>
      </section>

      <LoginButton></LoginButton>

      <h2 className='text-white text-center text-3xl bg-black py-3'>PRODUCTS</h2>
      <section id="products" className="grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-black pb-3">

        <Card />
        <Card />
        <Card />
        <Card />

      </section>
      <section
        id="newproducts"
        className="text-white bg-black text-center flex pt-12">
        <NewProducts></NewProducts>
      </section>

      <section id="contact" className="grid grid-cols-1 sm:grid-cols-2 text-white bg-gradient-to-r from-neutral-800 to-black text-center py-12 px-6">
        <div className="flex">
          <div className="mx-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Schedule your appointment</h1>
            <p className="text-lg sm:text-xl lg:text-2xl  mt-8 text-justify mb-6">Fill out the form below, so that an expert can contact you in order to guide you in the acquisition of components and offer you the assembly of the same</p>
          </div>
        </div>
        <div className="order-last sm:order-last">
          <ContactForm/>
        </div>
        
      </section>
      <section>
        <Footer />
      </section>
    </div>

  );
}