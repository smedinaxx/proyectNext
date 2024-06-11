import React from 'react';
import EjemploProducts from '../components/emblaCarousel/EjemploProducts'
import LayoutSimple from '../components/LayoutSimple';

const products = [
  {
    name: "GIGABYTE AORUS 17H LAPTOP",
    description: "Bisel Delgado de 17.3 Pulgadas FHD1920x1080 visualización de 360Hz, NVIDIA GeForce RTX 4080 portátil GPU 12GB GDDR6, Intel Core i7-13700H, 16GB DDR5 RAM, 1TB SSD, Win11 Home AD",
    images: [
      { url: "/aorusprod/aorus.jpg", alt: "Producto 1 - Imagen 1" },
      { url: "/aorusprod/aorus1.jpg", alt: "Producto 1 - Imagen 2" },
      { url: "/aorusprod/aorus2.jpg", alt: "Producto 1 - Imagen 3" },
      { url: "/aorusprod/aorus3.jpg", alt: "Producto 1 - Imagen 4" },
    ],
    price:"$38,666.00",
    options: { loop: true },
  },
  {
    name: "GIGABYTE X670E AORUS MOTHERBOARD ",
    description: "(AM5/ LGA 1718/ AMD X670E/ EATX/ 5 años de garantía/DDR5/Quad M.2, PCIe 5.0/USB 3.2 Gen2X2 Type-C/Intel WiFi 6E/ Intel 2.5GbE LAN/Q-Flash Plus/Placa Base para Juegos)",
    images: [
      { url: "/aorusprod/mboard.jpg", alt: "Producto 2 - Imagen 1" },
      { url: "/aorusprod/mboard1.jpg", alt: "Producto 2 - Imagen 2" },
      { url: "/aorusprod/mboard2.jpg", alt: "Producto 2 - Imagen 3" },
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
