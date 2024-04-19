import { useEffect, useState } from "react";
import style from './Chucknorris.module.css'

interface IJoke {
    id: string;
    value: string,
}

export default function Chucknorris(): JSX.Element {
 
    const [qId, setQId] = useState<string>('');
    const [joke, setJoke] = useState<string>('');

    async function fetchJoke():Promise<void> {
        try{
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        const { id:qId, value:joke } = data as IJoke;
        setQId(qId);
        setJoke(joke);
        } catch(error) {
            console.error('Error fetch joke', error)
        }
    }
    useEffect(() => {
        fetchJoke()
    }, []);

    return (
        <div className={style.container}>
            <h1 className={style.h1Joke}>{joke}</h1>
            <p className={style.pJoke}>id:{qId}</p>
            <button onClick={fetchJoke}>New joke</button>
        </div>
    )
}

