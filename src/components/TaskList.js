import React from "react";
import Task from "./Task"

function TaskList({tasks,  updateTasks}) {
  const taskList = tasks.map(task => <Task category = {task.category} text={task.text} updateTasks={updateTasks} key={task.text}/>)

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
