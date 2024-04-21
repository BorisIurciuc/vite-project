import { useEffect, useState } from 'react';
import IWine from './type/IWine';
import style from './WInes.module.css'
import { Link } from 'react-router-dom';



export default function Wines(): JSX.Element {
    const [data, setData] = useState<IWine[]>([]);

    async function fetchWines(): Promise<void>{
        try{
            const res = await fetch('https://api.sampleapis.com/wines/whites');
            const arr: IWine[] = await res.json();
            setData(arr); 
        } catch(error){
            console.error('wine fetch error', error);
        }
    }
    useEffect(() => {
        fetchWines();
    }, [])

    const highRatingWines = data.filter(wineData => wineData.rating.average > 4.7);

    return (
        <>
        <h1>Ассортимент вин</h1>
        <p>
            Ассортимент вин в ресторане представляет собой разнообразие сортов и марок вин, 
            предназначенных для удовлетворения вкусовых предпочтений посетителей. Ресторан стремится предложить широкий выбор 
            красных, белых и розовых вин лучших сортов, регионов и винодельческих хозяйств.
            Все это создает атмосферу изысканности и роскоши, способствуя неповторимому впечатлению от посещения ресторана.
        </p>
        <div className={style.wineContainer}>
            {highRatingWines.map((wineData) => (
                <div key={wineData.id} >
                    <h3>{wineData.wine}</h3>
                    <p>{wineData.winery}</p>
                    <img 
                        src={wineData.image} 
                        alt="image wine" 
                        style = {wineData.rating.average >= 4.9 ? {backgroundColor: 'rgb(250, 248, 122)' } : {backgroundColor: "hsl(205, 90%, 76%)" }}/>
                    <p>raiting:{wineData.rating.average}</p>
                    <Link to={`${wineData.id}`}>Подробнее</Link>
                </div>
            ))}
        </div>
        </>
    )
}
