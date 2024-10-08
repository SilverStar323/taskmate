const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new Date();
    if (task.id) {
      setTaskList(taskList.map(todo => (
        todo.id === task.id ? { id: task.id, name: task.name, time: `${data.toLocaleTimeString()} ${data.toLocaleDateString()}` } : todo
      )));
    } else {
      const newTask = { id: data.getTime(), name: event.target.task.value, time: `${data.toLocaleTimeString()} ${data.toLocaleDateString()}` };
      setTaskList([...taskList, newTask]);
    }
    setTask({});
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({ ...task, name: e.target.value })} />
        <button type="submit">{task.id ? "Upgrade" : "Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;