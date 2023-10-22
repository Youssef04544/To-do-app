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
    <div className='mx-[25%] my-[5%] p-4 h-[80vh] bg-gray-400 '>
   {/*gotta keep updating the css to center the form and give it the right size and make sure the todolist is well adjusted*/}
    <h1>To-do's</h1>
    <form className='my-2 w-full ' onSubmit={(e)=>addTodo(e)}>
      <input className='border-2 w-1/2 px-1' type="text" value={task} onChange={e=>setTask(e.target.value)} />
      <input className='ml-4 px-4 cursor-pointer bg-gray-300' type="submit" value="Add" />
    </form>
    {todos.length === 0 && <p>Nothing to do yet.</p>}
    <TodoList handleDelete={handleDelete} todos={todos}/>    

    </div>
  );
}

export default App;
