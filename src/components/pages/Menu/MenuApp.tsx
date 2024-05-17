/* eslint-disable @typescript-eslint/no-unused-vars */
import Menu from "./Menu";
import Categories from "./Categories";
import menu from './data';
import MenuItem from "./IMenuItem";
import { useState } from "react";

// Извлечение всех уникальных категорий и добавление "all" в начало массива
const allCategories: string[] = ['all', ...new Set(menu.map((item) => item.category))];

const MenuApp: React.FC = () => {
    // Использование состояния для меню и категорий
    const [menuItems, setMenuItems] = useState<MenuItem[]>(menu);
    const [categories] = useState<string[]>(allCategories);

    // Функция для фильтрации элементов по категории
    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(menu);
        } else {
            const newItems = menu.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    };

    return (
        <section>
            <h2>Our Menu</h2>
            {/* Передача категорий и функции фильтрации в компонент Categories */}
            <Categories categories={categories} filterItems={filterItems} />
            <div>
                {/* Передача отфильтрованных элементов меню в компонент Menu */}
                <Menu items={menuItems} />
            </div>
        </section>
    );
};

export default MenuApp;