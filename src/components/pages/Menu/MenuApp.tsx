import Menu from "./Menu";
import Categories from "./Categories";
import menu from './data';
import MenuItem from "./IMenuItem";
import React, { useState } from "react";


const allCategories: string[] = ['all', ...new Set(menu.map((item) => item.category))];

const MenuApp: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(menu);
    const [categories, setCategories] = useState<string[]>(allCategories);

    const filterItems = (category: string) => {
        if (category === 'all'){
            setMenuItems(menu);
            return;
        }
        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return(
        <section >
                <h2>Our Menu</h2>
                <Categories categories={categories} filterItems={filterItems} />

                <div >
                <Menu items={menuItems} />
            </div>
        </section>
    )
}
export default MenuApp;
