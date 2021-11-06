import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const optionCats = categories.filter(category => category !== "All")
  const options = optionCats.map(cat => <option value={cat} key={cat}>{cat}</option>)
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("Code")

  const newDetails = (e) =>{
    setDetails(e.target.value)
  }

  const newCategory = (e) =>{
    setCategory(e.target.value)
  }

  const newTask={
    text: details,
    category: category
  }

  return (
    <form className="new-task-form" onSubmit={() => onTaskFormSubmit(newTask)}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={newDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={newCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
