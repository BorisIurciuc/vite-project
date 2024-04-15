import React, { useEffect, useState } from 'react'
import Product from './type/Product'
import style from './Products.module.css'
import { Link } from 'react-router-dom';

export default function Products(): JSX.Element {

    const [products, setProducts] = useState<Product[]>([]);
    
    async function fetchProducts(): Promise<void> {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/`);
            if (!res.ok) {
                throw new Error('Failed to fetch product');
            }
            const arr = await res.json();
            setProducts(arr);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div className={style.containerProducts}>
        <h3>Product</h3>
        <ul className={style.ulProducts}>
            {products.map((product) => (
                <li key={product.id} className={style.liProducts}>
                    <h3>{product.title}</h3>
                    <img src={product.image} className={style.imageProducts} alt="" />
                    <p>{product.price}</p>
                    <Link to={`${product.id}`} >View this product</Link>
                </li>
            ))}
        </ul>
    </div>
  )

}