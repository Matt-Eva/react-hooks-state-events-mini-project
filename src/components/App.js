import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskData, setTaskData] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const displayTasks = taskData.filter(task =>{
    if(category === "All"){
      return true;
    } else if(task.category === category){
      return true;
    }
  })

  const updateTasks = (text) => {
    setTaskData(taskData.filter(task => task.text !== text))
  }

  const filterTasks = (category) => {
    setCategory(category)
  }

  const onTaskFormSubmit =(task) =>{
    
    setTaskData([...taskData, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCat={category} filterTasks={filterTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayTasks} updateTasks={updateTasks}/>
    </div>
  );
}

export default App;
