import React from "react";

const Product = () => {
    const products = [
        {
            name: 'Product 1',
            price: 100,
            image: 'https://fastly.picsum.photos/200/300'
        },
        {
            name: 'Product 2',
            price: 200,
            image: 'https://fastly.picsum.photos/200/300'
        },
        {
            name: 'Product 3',
            price: 300,
            image: 'asus.jpg'
        },
        {
            name: 'Product 4',
            price: 400,
            image: 'https://fastly.picsum.photos/200/300'
        },
        {
            name: 'Product 5',
            price: 500,
            image: 'https://fastly.picsum.photos/200/300'
        },
        {
            name: 'Product 6',
            price: 600,
            image: 'https://fastly.picsum.photos/200/300'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {products.map((product, index) => (
                <div key={index} className="hover:scale-105 transition duration-500 ease-in-out card-container rounded-xl overflow-hidden border border-lime-700 w-80">
                    <div className="image-container relative w-full h-60">
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px' }} />
                    </div>
                    <h2 className="pt-16">{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button
                        type="submit"
                        className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-6 md:mt-34 lg:mt-12 px-6 mb-2 mx-auto'>
                        Add to Cart
                    </button>


                </div>
            ))}
        </div>
    );
};

export default Product;
