import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1001, name: "Task 1", time: "7:57:32 PM 8/5/2024" },
    { id: 1002, name: "Task 2", time: "7:57:32 PM 8/5/2024" },
    { id: 1003, name: "Task 3", time: "7:57:32 PM 8/5/2024" }
  ]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <TaskList taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      </div>
    </div>
  );
}

export default App;
