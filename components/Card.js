import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ imageUrl, title, details, linkUrl = '/' }) {
  return (
    <div className='hover:scale-105 transition duration-500 ease-in-out card-container rounded-xl overflow-hidden border border-lime-700'>
      <div className='image-container relative w-full h-60'>
        <Image
          src={imageUrl}
          alt='Picture'
          layout='fill'
          objectFit='cover'
          className='grayscale hover:grayscale-0'
        />
      </div>
      <div className='text-container bg-black hover:bg-white text-white hover:text-black px-2 pb-4 h-fill'>
        <div className='text-center'>
          <h1 className='font-bold text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl pt-2 pb-2'>{title}</h1>
          <p className='text-xs sm:text-xs md:text-lg lg:text-lg xl:text-xl pb-8'>{details}</p>
          <Link href={linkUrl} passHref>
            <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 w-full'>
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}