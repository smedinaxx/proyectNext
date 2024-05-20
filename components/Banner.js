import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw',}}>
      <Image
        src="/setupBanner.webp"
        width={500}
        height={500}
        alt="Picture of the author"
        layout="responsive"
        className='opacity-80 hover:opacity-100'
      />
    </div>
  );
}

