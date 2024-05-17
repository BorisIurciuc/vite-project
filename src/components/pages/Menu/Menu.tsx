import MenuItem from "./IMenuItem";
import style from './Menu.module.css'

const Menu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
    return (
        <div>
            {items.map((menuItem) => {
                const {id, title, price, img, desc} = menuItem;
                return (
                    <article key={id} className={style.sectionMenuApp}>
                        <img src={img} alt={title} />
                        <div>
                            <header>
                                <h4>{title}</h4>
                                <h4>${price}</h4>
                            </header>
                            <p>{desc}</p>
                        </div>
                    </article>
                )
            } )}
        </div>
    )
}
export default Menu;