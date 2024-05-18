import React from 'react';
import Demo from '../pages/demo';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Página de inicio</h1>
      <Link href='/demo'>
        ir a demo
      </Link>
      <Demo /> {/* Aquí se renderiza el componente Demo */}
    </div>
  );
};

export default HomePage;
