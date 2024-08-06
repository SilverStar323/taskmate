import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
