import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Card from '../components/Card';
import LoginButton from '../components/LoginButton';
import NewProducts from '../components/NewProducts';

export default function Home() {
  return (
    <div>
      <div className='mt-16'>
        {/*<LoginButton></LoginButton>*/}
      </div>

      <NavBar />
      <section
        id="setup"
        className="bg-black text-center flex relative mt-16">
        <Banner></Banner>
        <div className='w-full absolute z-10 top-1/4 md:top-1/3 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-white text-3xl md:text-6xl lg:text-7xl font-semibold mb-2'>ALL THE BEST COMPONENTS</h1>
          <p className='text-lg text-white md:text-3xl lg:text-4xl mb-12'>FOR YOUR SETUPS</p>
          <Button href={"https://www.twitch.tv/smedinaxx"}>CLICK HERE</Button>
        </div>
      </section>

      <h2 className='text-white text-center text-3xl font-semibold bg-black py-3'>PRODUCTS</h2>
      <section id="products" className="grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-black pb-3">

        <Card />
        <Card />
        <Card />
        <Card />


      </section>
      <section
        id="newproducts"
        className="text-white bg-black text-center flex pt-6">
        <NewProducts></NewProducts>
      </section>

      <section
        id="contact"
        className="text-white h-screen bg-neutral-900 text-center flex">
        <h1 className="m-auto text-3xl text-white font-bold">

        </h1>
      </section>
      <section>
        <Footer />
      </section>
    </div>

  );
}