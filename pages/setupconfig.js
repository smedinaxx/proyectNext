"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import LayoutSimple from "../components/LayoutSimple";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import Image from "next/image";


export default function LayoutGridDemo() {
  return (
    <LayoutSimple>
      <BackgroundBeams></BackgroundBeams>
      <div className="h-screen pt-24 pb-4 sm:pt-32 w-full bg-gradient-to-r from-black to-neutral-900 flex flex-col justify-center items-center">
        <h1 className="mx-8 text-center font-bold text-neutral-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl pb-2">BUILDING GREAT SPACE TO WORK</h1>
        <p className="mx-10 py-4 text-white text-center text-md sm:text-lg md:text-2xl lg:text-3xl">Explore our creations below. Each piece is designed with functionality and style in mind. </p>
        <LayoutGrid cards={cards} />
      </div>
      <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-neutral-400 text-center py-6 bg-gradient-to-r from-black to-neutral-900'>GAMING FURNITURE</h1>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-8 sm:px-12 md:px-20 lg:px-20 xl:px-20 bg-gradient-to-r from-black to-neutral-900 py-6">
      
  <div className='relative w-full h-96'>
    <Image
      src="/furniture/chair1.jpg"
      alt='Picture'
      layout='fill'
      objectFit='cover'
    />
  </div>
  <div className='relative w-full h-96'>
    <Image
      src="/furniture/chair2.jpg"
      alt='Picture'
      layout='fill'
      objectFit='cover'
    />
  </div>
  <div className='relative w-full h-96'>
    <Image
      src="/furniture/desk1.jpg"
      alt='Picture'
      layout='fill'
      objectFit='cover'
    />
  </div>
  <div className='relative w-full h-96'>
    <Image
      src="/furniture/desk2.jpg"
      alt='Picture'
      layout='fill'
      objectFit='cover'
    />
  </div>
      
      </section>
    </LayoutSimple>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-1 rounded-xl px-6'>
        See more
      </button>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
      <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-1 rounded-xl px-6'>
        See more
      </button>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
      <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-1 rounded-xl px-6'>
        See more
      </button>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
      <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-1 rounded-xl px-6'>
        See more
      </button>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
      <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-1 rounded-xl px-6'>
        See more
      </button>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
      <button className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-1 rounded-xl px-6'>
        See more
      </button>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1 ",
    thumbnail: "/layoutgrid/minimal.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/layoutgrid/modern.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/layoutgrid/modern2.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: "/layoutgrid/nice.jpg",
  },
];
