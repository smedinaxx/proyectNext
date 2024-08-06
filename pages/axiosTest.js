import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const {name} = router.query

    useEffect(() => {
        // Reemplaza '/api/products' con la ruta correcta a tu API
        axios.get('http://localhost:3000/api/products?name=razer')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [name]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.price} - {product.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
