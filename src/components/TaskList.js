const TaskList = ({ taskList, setTaskList, task, setTask }) => {
  const handleEdit = (id) => {
    setTask(taskList.find(todo => todo.id === id));
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }
  
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => setTaskList([])} className="clearAll">Clear All</button>
      </div>
      <ul>
        {taskList && taskList.map((todo) =>
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
          </li>
        )}
      </ul>
    </section>
  )
}

export default TaskList;