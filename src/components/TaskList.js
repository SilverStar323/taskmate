import { useState } from "react";

const TaskList = () => {
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([
    { id: 1001, name: "Task 1", time: "7:57:32 PM 8/5/2024" },
    { id: 1002, name: "Task 2", time: "7:57:32 PM 8/5/2024" },
    { id: 1003, name: "Task 3", time: "7:57:32 PM 8/5/2024" }
  ]);

  const handleClear = () => {
    setCount(0);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{count}</span>
        </div>
        <button onClick={handleClear} className="clearAll">Clear All</button>
      </div>
      <ul>
        {taskList && taskList.map((task) =>
          <li key={task.id}>
            <p>
              <span className="name">Task 2</span>
              <span className="time">7:57:32 PM 8/5/2024</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        )}
      </ul>
    </section>
  )
}

export default TaskList