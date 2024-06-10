import React from 'react';
import EjemploProducts from '../components/emblaCarousel/EjemploProducts'
import LayoutSimple from '../components/LayoutSimple';

const products = [
  {
    name: "Razer Blade 15 Gaming Laptop",
    description: "NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4",
    images: [
      { url: "/razerprod/razerlap.jpg", alt: "Producto 1 - Imagen 1" },
      { url: "/razerprod/razerlap1.jpg", alt: "Producto 1 - Imagen 2" },
      { url: "/razerprod/razerlap2.jpg", alt: "Producto 1 - Imagen 3" },
    ],
    price:"$39,532.25",
    options: { loop: true },
  },
  {
    name: "Mechanical Gaming Keyboard",
    description: "Razer BlackWidow V4 Pro- (Yellow Switch) - US Layout - NAS",
    images: [
      { url: "/razerprod/razerkey.jpg", alt: "Producto 2 - Imagen 1" },
      { url: "/razerprod/razerkey1.jpg", alt: "Producto 2 - Imagen 2" },
      { url: "/razerprod/razerkey2.jpg", alt: "Producto 2 - Imagen 3" },
      { url: "/razerprod/razerkey3.jpg", alt: "Producto 2 - Imagen 4" },
    ],
    price:"$4,328.96",
    options: { loop: true },
  },
  // Añade los demás productos de manera similar
];

const ExamplePage = () => (
  <LayoutSimple>
  <div className='bg-neutral-900 pt-32 pb-8'>
    {products.map((product, index) => (
      <EjemploProducts key={index} product={product} />
    ))}
  </div>
  </LayoutSimple>
);

export default ExamplePage;
