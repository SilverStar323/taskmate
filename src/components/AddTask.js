import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");

  return (
    <section className="addTask">
      <form action="">
        <input type="text" name="task" autoComplete="off" value={task} placeholder="add task" onChange={(event) => setTask(event.target.value)}/>
        <button>Add</button>
      </form>
    </section>
  )
}

export default AddTask