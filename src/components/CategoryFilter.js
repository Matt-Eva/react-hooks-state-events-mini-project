import React from "react";
import CatButton from "./CatButton";

function CategoryFilter({categories, selectedCat, filterTasks}) {
  const catsButtons = categories.map(category => <CatButton category={category} key={category} selectedCat={selectedCat} filterTasks={filterTasks}/>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catsButtons}
    </div>
  );
}

export default CategoryFilter;
