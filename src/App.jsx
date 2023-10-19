import { useState } from 'react';
import TodoList from './components/TodoList';

let globalID = 0;

function App() {

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([])
  

  const addTodo = (e) => {
    e.preventDefault()
    
    setTodos(oldtodos =>{
      setTask("");
      return [...oldtodos, {todo:task,id: globalID++}]
    })
  }
  const handleDelete = (id) => {
    setTodos(oldtodos => oldtodos.filter((todo)=> todo.id !== id))
  }
  return (
    <>
    <h1>This is a todo list web application</h1>
    <form onSubmit={(e)=>addTodo(e)}>
      <input className='border-2' type="text" value={task} onChange={e=>setTask(e.target.value)} />
      <input type="submit" value="Add todo" />
    </form>
    {todos.length === 0 && <p>Nothing to do yet.</p>}
    <TodoList handleDelete={handleDelete} todos={todos}/>
    </>
  );
}

export default App;
