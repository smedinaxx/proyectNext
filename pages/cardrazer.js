import React from 'react';
import EjemploProducts from '../components/emblaCarousel/EjemploProducts';
import LayoutSimple from '../components/LayoutSimple';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 7,
    name: "Razer Blade 15 Gaming Laptop",
    description: "NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4",
    images: [
      { url: "/razerprod/razerlap.jpg", alt: "Producto 1 - Imagen 1" },
      { url: "/razerprod/razerlap1.jpg", alt: "Producto 1 - Imagen 2" },
      { url: "/razerprod/razerlap2.jpg", alt: "Producto 1 - Imagen 3" },
    ],
    price: 39532.25,
    options: { loop: true },
  },
  {
    id: 8,
    name: "Rzaer Mechanical Gaming Keyboard",
    description: "BlackWidow V4 Pro- (Yellow Switch) - US Layout - NAS",
    images: [
      { url: "/razerprod/razerkey.jpg", alt: "Producto 2 - Imagen 1" },
      { url: "/razerprod/razerkey1.jpg", alt: "Producto 2 - Imagen 2" },
      { url: "/razerprod/razerkey2.jpg", alt: "Producto 2 - Imagen 3" },
      { url: "/razerprod/razerkey3.jpg", alt: "Producto 2 - Imagen 4" },
    ],
    price: 4328.96,
    options: { loop: true },
  },
  // Añade más productos si es necesario
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
