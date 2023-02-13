import './App.css';
import { useState } from 'react';
import TaskList from './Components/TaskList';

function App() {
  const [todoList, setTodolist] = useState([]);
  const [task, setTasks] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    setTodolist([...todoList,task])
    setTasks("")
    console.log(todoList)
  }

  return (
    <div className='App'>
      <h1> Bienvenue sur la TodoApp</h1>
      <form onSubmit={(event) => addTask(event)}>
        <input value={task} onChange={(event) => setTasks(event.currentTarget.value)} type="text" placeholder='New Task' />
        <button type='submit'>Add task</button>
      </form>

      <TaskList taskList={todoList}/>
    </div>
  );
}

export default App;
