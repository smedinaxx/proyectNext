import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '60vh', maxWidth: '100vw' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Image
  src="/bannerNew.jpg"
  fill
  sizes="100vw"
  style={{
    objectFit: "cover",
    objectPosition: "center"
  }}
  alt="Picture of the author"
/>
</div>
<div style={{
  position: 'absolute', 
  top: 0, 
  left: 0, 
  width: '100%', 
  padding: '20px', 
  color: 'white', 
  textAlign: 'center',
}}>
        <h1 className='mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>NEW ARRIVALS</h1>
        <p className='pb-4'>PREMIUM PRODUCTS</p>
        <Link href="/thenew">
        <button className='text-white text-sm border border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 px-16'>See more</button>
        </Link>
      </div>
    </div>
  );
}
