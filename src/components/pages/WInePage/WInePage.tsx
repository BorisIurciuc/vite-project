import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import IWine from '../Wines/type/IWine';
import style from './WinePage.module.css'

export default function WInePage(): JSX.Element {
    
    const {wineId} = useParams();
    const [qWine, setQWine] = useState<IWine | undefined>(undefined);

    async function fetchWine(): Promise<void> {
        try {
            const res = await fetch(`https://api.sampleapis.com/wines/whites/${wineId}`);
            const obj = await res.json();
            setQWine(obj);
        } catch(error) {
            console.error('Error fetch wine', error);
        }
    }
    useEffect(() => {
        fetchWine();
    }, [wineId]);

    return (
    <>
    <div className={style.containerWinePage}>
        <h2 className={style.h2WP}>Wine: {qWine?.wine}</h2>
        <p className={style.pWP1}>Winery: {qWine?.winery}</p>
        <p className={style.pWP2}>location: {qWine?.location}</p>
        <img src={qWine?.image} className={style.imageWP} alt="wine image" />
        <p className={style.pWP3}>Rating: {qWine?.rating.average}</p>
        <Link to='../wines' className={style.linkWP}>К ассортименту вин</Link>
    </div>
   

    </>
    )
}
