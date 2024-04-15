import React, { useState } from 'react'
import style from './BayernSalad.module.css'
import BtnCounter from '../BtnCounter/BtnCounter';
import ToDoListClients from '../ToDoListClients/ToDoListClients';



export default function BayernSalad(): JSX.Element {
    const [salad, setSalad] = useState<string>("Dish ingredients:");

    function handleAddPotato(): void {
        setSalad(`${salad} potato - 450 gr,`);
    }
    function handleAddOnion(): void {
        setSalad(`${salad} onion - 1 ps,`);
    }
    function handleAddVinegar(): void {
        setSalad(`${salad} vinegar - 50 ml,`);
    }
    function handlerAddGreenOnions(): void {
        setSalad(`${salad} green onions - 2 pc,`);
    }
    function handleAddPepper(): void {
        setSalad(`${salad} pepper - 2 gr,`)
    }
    function handlerAddClear(): void {
        setSalad('Make new salad:')
    }

  return (
 
    <div className={style.container}>
        <>
        <h1>Картофельный салат по-баварски</h1>
        <p>Блюдо заменяет обед или ужин в полной мере, особенно при горячей подаче 
            сразу после сборки. Традиционно к теплому немецкому салату с баварскими 
            колбасками и картофелем идет пиво, тут порции готовьте большие. При всей простоте рецепта сочетание 
            продуктов более чем удачное и потому популярное в разных вариациях.</p>
        <img src="https://static.dw.com/image/16687655_1004.webp" alt="" />
        <span style={{color:"red"}}>{salad}</span>
        <div className={style.btnContainer}>
            <button type='button' className={style.btn} onClick={handleAddPotato}>Картофель</button>
            <button type='button' className={style.btn} onClick={handleAddOnion}>Лук</button>
            <button type='button' className={style.btn} onClick={handleAddVinegar}>Уксус</button>
            <button type='button' className={style.btn} onClick={handlerAddGreenOnions}>Зеленный лук</button>
            <button type='button' className={style.btn} onClick={handleAddPepper}>Перец</button>
            <button type='button' className={style.btn} onClick={handlerAddClear}>Повторить</button>
        </div>
        <h1>Зарезервировать места</h1>
        <ToDoListClients />
        
        <BtnCounter />
  
        </>
    </div>
   
    
  )
}
