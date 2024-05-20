import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Card() {
  return (
    <div className='card-container rounded-xl overflow-hidden'>
      <div className='image-container'>
        <Image
          src='/monitorBenq.jpg'
          width={500}
          height={500}
          alt='Picture of the author'
          layout='responsive'
          className='grayscale hover:grayscale-0 hover:scale-105'
        />
      </div>
      <div className='text-container bg-neutral-300 hover:bg-white text-black p-2'>
        <h1 className='font-bold flex justify-center'>Monitor BenQ Mobuiz 25inches</h1>
        <ul>
          <li>Resolucion: Full HD</li>
          <li>Panel: IPS</li>
          <li>144Hz, 1ms de respuesta, Black Equalizer</li>
        </ul>
        <div className='text-center'>
          <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 w-full'>See more</button>
        </div>
      </div>
    </div>
  );
}
