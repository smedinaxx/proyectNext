{/*import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductsPage(){
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        axios.get("/api/prodmongo").then((response)=> setProducts(response.data));
    }, []);

    return(
        <div>
            <h1>Llamadas</h1>
            <ul>
                {products.map((products)=>(
                    <li key={products._id}>{products.name}-{products.description}-{products.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}*/}