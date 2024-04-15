import React, { useState } from 'react'
import style from './BtnCounter.module.css'

export default function BtnCounter(): JSX.Element {
    const[counter, setCounter] = useState<number>(0);

    function handlePlus(): void {
        setCounter(counter +1);
    }
    function handleMinus(): void {
        setCounter(counter -1);
    }

  return (
    <div className={style.container}>
        <h3>Количество</h3>
        <div className={style.btnContainer}>
            <button type='button' className={style.btn} onClick={handleMinus}>Minus</button>
            <span style={{color:"red"}}>{counter}</span>
            <button type='button' className={style.btn} onClick={handlePlus}>Plus</button>
        </div>
    </div>
  )
}
