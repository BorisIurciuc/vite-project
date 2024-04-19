import { useState } from 'react'
import style from './ProductPage.module.css'
import Product from '../Products/type/Product'
import { Link, useParams } from 'react-router-dom'
import BtnCounter from '../BtnCounter/BtnCounter';


export default function ProductPage(): JSX.Element  {
    const { productId }: {productId: string} = useParams() as { productId: string };
    const [product, setProduct] = useState<Product | undefined>(undefined);
    async function fetchProduct(): Promise<void> {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!res.ok) {
                throw new Error('Failed to fetch product');
            }
            const obj = await res.json();
            setProduct(obj);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }
    useState(() => {
        fetchProduct();
    }, [productId]);

  return (
    <div>
        <Link to="/">Главная</Link>
        <h2>ProductPage</h2>
        <p>{product?.title}</p>
        <p>{product?.category}</p>
        <img src={product?.image} className={style.imageProductPage} alt="" />
        <p>{product?.price}</p>
        <p>{product?.description}</p>
        <Link to='../products'>To list of products</Link>
        <BtnCounter />
    </div>
  )
}
