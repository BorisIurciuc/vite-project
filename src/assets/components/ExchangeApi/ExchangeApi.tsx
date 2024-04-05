import { useEffect, useState } from 'react';
import style from './ExchangeApi.module.css';

interface EschangeRateData{
    time_last_update_utc: string;
    conversion_rates: {
        USD: number;
        EUR: number;
        GBP: number;
        MDL: number;
    }
}

export default function ExchangeApi(): JSX.Element {
  
    const [time, setTime] = useState<string>('');
    const [qUSD, setQUSD] = useState<number>(0);
    const [qEUR, setQEUR] = useState<number>(0);
    const [qGBP, setQGBP] = useState<number>(0);
    const [qMDL, setQMDL] = useState<number>(0);

    async function loadRate(): Promise<void> {
        try {
            const res = await fetch("https://v6.exchangerate-api.com/v6/6bbf82a3c356b8178fe8f741/latest/USD");
            const data: EschangeRateData = await res.json();

            setTime(data.time_last_update_utc);
            setQUSD(data.conversion_rates.USD);
            setQEUR(data.conversion_rates.EUR);
            setQGBP(data.conversion_rates.GBP);
            setQMDL(data.conversion_rates.MDL);
        } catch (error) {
            console.error('Error loading exchange rates:', error);
        }
    }
  
    useEffect(() => {
        loadRate();
    }, [])

    return (
    <div className={style.conteiner}>ExchangeApi
        <p>data {time}</p>
        <p>USD {qUSD}</p>
        <p>EUR {qEUR}</p>
        <p>GBP {qGBP}</p>
        <p>MDL {qMDL}</p>
    </div>
  )
}
