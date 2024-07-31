import React from 'react';
import EjemploProducts from '../components/emblaCarousel/EjemploProducts'
import LayoutSimple from '../components/LayoutSimple';
import { useCart } from '../context/CartContext';

const products = [
  {
    id:3,
    name: "ASUS ROG Strix G16 (2023) Gaming Laptop",
    description: "FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray",
    images: [
      { url: "/asusprod/roglap.jpg", alt: "Producto 1 - Imagen 1" },
      { url: "/asusprod/roglap1.jpg", alt: "Producto 1 - Imagen 2" },
      { url: "/asusprod/roglap2.jpg", alt: "Producto 1 - Imagen 3" },
      { url: "/asusprod/roglap3.jpg", alt: "Producto 1 - Imagen 4" },
    ],
    price: 39999.00,
    options: { loop: true },
  },
  {
    id:4,
    name: "ASUS ROG Flow Z13 (2022) Gaming Laptop Tablet",
    description: "13.4” 120Hz IPS Type FHD 16:10 Display, Intel Core i5-12500H CPU, 16GB LPDDR5, 512GB PCIe SSD, Free Bundle Detachable RGB Keyboard, GZ301ZA-PS53, Black",
    images: [
      { url: "/asusprod/tabletrog.jpg", alt: "Producto 2 - Imagen 1" },
      { url: "/asusprod/tabletrog1.jpg", alt: "Producto 2 - Imagen 2" },
      { url: "/asusprod/tabletrog2.jpg", alt: "Producto 2 - Imagen 3" },
    ],
    price: 19599.00,
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
          </div>
        ))}
      </div>
    </LayoutSimple>
  );
};

export default ExamplePage;
