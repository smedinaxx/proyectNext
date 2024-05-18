import React from 'react';
import Demo from '../pages/demo';

const HomePage = () => {
  return (
    <div>
      <h1>Página de inicio</h1>
      <a href='/demo'></a>
      <Demo /> {/* Aquí se renderiza el componente Demo */}
    </div>
  );
};

export default HomePage;
