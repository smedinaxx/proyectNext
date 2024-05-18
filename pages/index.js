import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section
        id="about"
        className="text-white bg-black text-center flex relative mt-16">
        <Banner></Banner>
        <h1 className='text-white text-md absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          <Button href={"https://www.twitch.tv/smedinaxx"}>LIVESTREAM</Button>
        </h1>
      </section>

      <section id="blog" className="text-white bg-gradient-to-r from-neutral-900 to-lime-900 py-2 flex flex-wrap">
        
        <div className="w-full sm:w-1/3 md:w-1/2 p-4">
          <div className="bg-transparent">
            <Card></Card>
          </div>
        </div>
        
        <div className="w-full sm:w-1/3 md:w-1/2 p-4">
          <div className="bg-transparent">
            <Card></Card>
          </div>
        </div>

      
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-neutral-900 text-center flex">
        <h1 className="m-auto text-3xl text-white font-bold">
          Galeria
        </h1>
      </section>
      <section>
        <Footer />
      </section>
    </div>

  );
}