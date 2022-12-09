import React, { useState } from "react";
import ToDoTask from "./ToDoTask";

const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [Task, setTask] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditTask, setisEditTask] = useState(null);

  const taskEvent = (event) => {
    setInputTask(event.target.value);
  };


  const addTask = () => {
    if (inputTask === "") {
      alert('Please Enter Task');
      return
    } else if (inputTask && !toggleSubmit) {
      setTask(
        Task.map((arrElem, id) => {
          if (id === isEditTask) {
            return { ...arrElem.id, taskName: inputTask }
          }
          return arrElem;
        })
      )
      setToggleSubmit(true);
      setInputTask('');
      setisEditTask(null);
    } else {
      const allInputTask = { id: new Date().getTime().toString(), taskName: inputTask }
      setTask((StoredTask) => {
        return [...StoredTask, allInputTask];
      });
      setInputTask("");
    }
  };

  // Edit task
  const editTask = (id) => {
    let newEditTask = Task.find((arrElem, index) => {
      return index === id;

    });
    console.log(newEditTask);
    setToggleSubmit(false);

    setInputTask(newEditTask.taskName);
    //console.log(setInputTask);
    setisEditTask(id);
    //console.log(setisEditTask);
  };

  const deleteTask = (id) => {
    setTask((StoredTask) => {
      return StoredTask.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
      <div className="container">
        <h1>TO-DO ~ Task</h1>
        <div className="newtask">
          <input type="text" placeholder="Enter Task" value={inputTask} onChange={taskEvent} />

          {
            toggleSubmit ? <button onClick={addTask} className="addtodo-btn" type="submit">ADD</button> :
              <button onClick={addTask} className="updatetodo-btn" type="submit">Update</button>
          }


        </div>
        <ul>
          {Task.map((taskval, index) => {
            return <ToDoTask
              key={taskval.id}
              id={index}
              text={taskval.taskName}
              textEdit={editTask}
              onSelect={deleteTask}
            />;
          })}

        </ul>
      </div>

    </>
  );
};

export default App;