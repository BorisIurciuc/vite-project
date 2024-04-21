const Categories: React.FC<{ categories: string[]; filterItems: (category: string) => void }> = ({ categories, filterItems }) => {
return(
        <div>
            {categories.map((category, index) => {
                return(
                    <button
                        type="button"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
export default Categories;