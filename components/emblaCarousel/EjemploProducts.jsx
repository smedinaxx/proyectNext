import React from 'react';
import EjemploProps from '../emblaCarousel/EjemploProps'
import Button from '../Button';

const EjemploProducts = ({ product }) => {
  const { name, description, images, price, options } = product;

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
          <p className="px-4">{price}</p>
          <Button buttonText={"Add to cart"}></Button>
        </div>

      </div>
    </div>
  );
};

export default EjemploProducts;