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
    <div className='mx-[35%] my-[5%] h-[80vh] bg-white'>
   {/*gotta keep updating the css to center the form and give it the right size and make sure the todolist is well adjusted*/}
    <h1 className='text-center font-bold text-3xl p-3'>TODO LIST</h1>
    <form className='my-2 w-full flex justify-center p-4' onSubmit={(e)=>addTodo(e)}>
      <input className='border-2 w-full p-2 rounded-md' type="text" placeholder='add a new task...' value={task} onChange={e=>setTask(e.target.value)} />
      {/*Make the button position absolute and size it and color it correctly*/}
      <input className='ml-4 p-2 cursor-pointer rounded-full text-xl center bg-gray-300' type="submit" value="+" />
    </form>
    {todos.length === 0 && <p>Nothing to do yet.</p>}
    <TodoList handleDelete={handleDelete} todos={todos}/>    

    </div>
  );
}

export default App;
