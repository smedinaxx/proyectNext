import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
<div style={{ position: 'relative', width: '100%', height: '60vh', maxWidth: '100vw' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    <Image
      src="/setupBanner.webp"
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
      alt="Picture of the author"
      className='opacity-50'
    />
        
  
      </div>
    </div>
  );
}
