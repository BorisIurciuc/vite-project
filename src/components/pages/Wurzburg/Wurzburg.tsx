import style from './Wurzburg.module.css';
import FetchWeater from '../FetchWeater/FetchWeater';


export default function Wurzburg(): JSX.Element {
    return (
        
        <div className = {style.containerW}>
            <>
            <h1>Бавария, город Вюрцбург</h1>
            <div className={style.city}>
                <p className={style.pW}>
                Вю́рцбург (нем. Würzburg) — город на северо-западе германской федеральной земли Бавария, 
                расположенный на реке Майн. Один из исторических центров Франконии, столица местного 
                виноделия. Северная точка «романтической дороги Германии». Имеет статус «свободного города», 
                вляется центром административного округа Нижняя Франкония, земельного района Вюрцбург и римско-католической епархии.
                </p>
                <img className={style.imageW}
                src="https://de.cosmoconsult.com/fileadmin/user_upload/Deutschland/Header_Visual/cosmo-consult-locations-germany-wuerzburg.webp" alt="" />
            </div>
            <div className={style.city}>
                <p className={style.pW}>
                Как и любой старинный немецкий город (а Вюрцбургу, больше 1300 лет), столица Нижней Франконии богата достопримечательностями. 
                Необычность лишь в том, что многие из них появились в наше время. Город был почти стерт с лица земли в результате авианалетов 1945 г., 
                однако стараниями местных жителей сумел обрести вторую жизнь.
                </p>
                <img className={style.imageW}
                src="https://www.merian.de/uploads/media/1920x1080/00/5970-Wu%CC%88rzburg-Mainufer.webp?v=1-0" alt="" />
            </div>
            <div className={style.containerW}>
            <FetchWeater />
            </div>
            </>
        </div>

        
    )
}

