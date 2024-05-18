import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw',}}>
      <Image
        src="/bspace.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        layout="responsive"
        className='grayscale hover:grayscale-0 rounded-xl'
      />
      </div>
    
  );
}
