import React from 'react';
import Image from 'next/image';

export default function Card({ imageUrl, title, details }) {
  return (
    <div className='card-container rounded-xl overflow-hidden'>
      <div className='image-container relative w-full h-60'>
        <Image
          src={imageUrl}
          alt='Picture'
          layout='fill'
          objectFit='cover'
          className='grayscale hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out'
        />
      </div>
      <div className='text-container bg-neutral-300 hover:bg-white text-black px-2 h-40'>
        <div className='text-center'>
          <h1 className='font-bold text-xl pt-2 pb-2'>{title}</h1>
          <p className='pb-8'>{details}</p>
          <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 w-full'>See more</button>
        </div>
      </div>
    </div>
  );
}
