import { useState } from 'react';
import style from './FetchWeater.module.css'


export default function FetchWeater(): JSX.Element {
    const [weatherData, setWeatherData] = useState<string>('');
    
    const qUrl = "https://wttr.in/Würzburg"
    const qParams = {
    1: "",
    m: "",
    lang: "",
    T:"",
    };

    async function fetchData(url: string, params: any): Promise<void> {
        const queryString = new URLSearchParams(params).toString();
        try {
        const res = await fetch(`${url}?${queryString}`);
        if(!res.ok){
          throw new Error(`Failed to fetch weather data from ${url}. Server returned ${res.status} ${res.statusText}`);        }
        const  data  = await res.text();
        setWeatherData(data);
        } catch (error){
          console.error("Error fetching weather", error);
        }
    }
    function fetchCityWether(){
        fetchData(qUrl, qParams)
    }
  return (
    <div className={style.container}>
        <h3>Погода</h3>
        <button className={style.btnWeather} onClick={fetchCityWether}>Погода в Вюрцбурге</button> 
        <div className={style.weatherText} dangerouslySetInnerHTML={{ __html: weatherData }} />
    </div>
  )
}
