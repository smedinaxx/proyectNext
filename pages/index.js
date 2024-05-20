import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Card from '../components/Card';
import LoginButton from '../components/LoginButton';

export default function Home() {
  return (
    <div>
      <div className='mt-16'>
        {/*<LoginButton></LoginButton>*/}
      </div>

      <NavBar />
      <section
        id="setup"
        className="text-white bg-black text-center flex relative mt-16">
        <Banner></Banner>
        <h1 className='text-white text-2xl font-bold w-full absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Lorem ipsum is placeholder.
          <Button href={"https://www.twitch.tv/smedinaxx"}>Setup Gamers</Button>
        </h1>
      </section>

      <section id="products" className="grid grid-cols-1 px-24 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r from-black to-neutral-700 pt-6 pb-3">
        <h2 className='text-white text-center text-2xl font-bold mb-'>Products</h2>
          <Card />
          <Card />
          <Card />
          <Card />


      </section>
      <section
        id="newproducts"
        className="text-white h-screen bg-neutral-900 text-center flex">
        <h1 className="m-auto text-3xl text-white font-bold">

        </h1>
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