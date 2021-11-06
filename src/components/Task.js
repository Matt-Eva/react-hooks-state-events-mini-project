import React from "react";

function Task({category, text, updateTasks}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>updateTasks(text)}>X</button>
    </div>
  );
}

export default Task;
