import React from 'react';
import EjemploProducts from '../components/emblaCarousel/EjemploProducts'
import LayoutSimple from '../components/LayoutSimple';
import { useCart } from '../context/CartContext';

const products = [
  {
    id:5,
    name: "NZXT Keyboard",
    description: "TKL White ANSI (US)",
    images: [
      { url: "/nzxtprod/keyb.jpg", alt: "Producto 1 - Imagen 1" },
      { url: "/nzxtprod/keyb1.jpg", alt: "Producto 1 - Imagen 2" },
      { url: "/nzxtprod/keyb2.jpg", alt: "Producto 1 - Imagen 3" },
      { url: "/nzxtprod/keyb3.jpg", alt: "Producto 1 - Imagen 4" },
    ],
    price: 2551.78,
    options: { loop: true },
  },
  {
    id:6,
    name: "NZXT Gabinete H7",
    description: "Elite Blanco, ATX",
    images: [
      { url: "/nzxtprod/gabin.jpg", alt: "Producto 2 - Imagen 1" },
      { url: "/nzxtprod/gabin1.jpg", alt: "Producto 2 - Imagen 2" },
      { url: "/nzxtprod/gabin2.jpg", alt: "Producto 2 - Imagen 3" },
      { url: "/nzxtprod/gabin3.jpg", alt: "Producto 2 - Imagen 4" },
    ],
    price:3169.00,
    options: { loop: true },
  },
  // Añade los demás productos de manera similar
];

const ExamplePage = () => {
  const { addToCart } = useCart();

  return (
    <LayoutSimple>
      <div className='bg-neutral-900 pt-32 pb-8'>
        {products.map((product) => (
          <div key={product.id}>
            <EjemploProducts product={product} />
            <button
              className="btn-add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </LayoutSimple>
  );
};

export default ExamplePage;
