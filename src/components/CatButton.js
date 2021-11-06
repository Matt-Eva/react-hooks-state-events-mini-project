const CatButton = ({category, selectedCat, filterTasks}) => {
    return(
        <button className={category === selectedCat ? "selected" : ""} onClick={()=>filterTasks(category)}>
            {category}
        </button>
    )
}

export default CatButton