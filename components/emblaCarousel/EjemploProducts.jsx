import React from 'react';
import EjemploProps from '../emblaCarousel/EjemploProps';
import Button from '../Button';
import { useCart } from '../../context/CartContext'; // Asegúrate de que la ruta sea correcta

// Función para formatear el precio como moneda
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD', // Cambia a la moneda que necesitas
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const EjemploProducts = ({ product }) => {
  const { name, description, images, price, options } = product;
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto

  return (
    <div className="bg-neutral-900 text-white text-md py-4">
      <div className="border border-neutral-700 mx-6 px-6 flex flex-col md:flex-row justify-center items-start md:items-center">

        {/* Carousel Container */}
        <div className="w-full md:w-1/2">
          <EjemploProps slides={images} options={options} />
        </div>

        {/* Details Container */}
        <div className="mx-4 sm:mx-2 md:mx-14 lg:mx-20 xl:mx-20 pb-6 w-full md:w-1/2">
          <h2 className="text-md md:text-xl lg:text-2xl xl:text-3xl px-2 font-bold">{name}</h2>
          <p className="mt-2 pb-4 px-2 text-xs md:text-xs lg:text-md xl:text-lg">{description}</p>
          <p className="px-4">{formatCurrency(price)}</p> {/* Usa formatCurrency para mostrar el precio */}
          <Button
            buttonText="Add to cart"
            onClick={() => addToCart(product)} // Llama a addToCart con el producto
          />
        </div>

      </div>
    </div>
  );
};

export default EjemploProducts;
