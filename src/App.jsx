import { useState, useRef } from 'react';
import TodoList from './components/TodoList';

let globalID = 0;

function App() {

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState({editing:false})
  const inputRef = useRef();

  const addTodo = (e) => {
    e.preventDefault()
    //Checks if we're editing a todo
    if (!isEditing.editing){
      setTodos(oldtodos =>{
        setTask("");
        return [...oldtodos, {task,id: globalID++, completed:false}]
      })
    }else {
      setTodos(oldtodos=> {
        setTask('');
        setIsEditing({editing:false})
        return oldtodos.map(todo => {
          if (todo.id === isEditing.todo.id) return {...todo, task}
          return todo
        })
      })
    }
    inputRef.current?.focus();
  }
  const handleDelete = (id) => {
    setTodos(oldtodos => oldtodos.filter((todo)=> todo.id !== id))
  }

  const handleCompleted = (id) => {
    setTodos (oldtodos => oldtodos.map((todo)=>{
      if(todo.id === id) return {...todo, completed: !todo.completed}
      return todo
    }))
  }

  const handleEdit = (todo) => {
    setTask(todo.task)
    setIsEditing({todo, editing:true})
  }
  return (
    <div className='mx-[35%] my-[5%] h-[80vh] bg-white rounded-lg'>
   {/*gotta keep updating the css to center the form and give it the right size and make sure the todolist is well adjusted*/}
    <h1 className='text-center font-bold text-3xl p-3'>TODO LIST</h1>
    <form className='my-2 w-full flex justify-center p-4' onSubmit={(e)=>addTodo(e)}>
      <input className='border-2 w-full p-2 rounded-md'autoFocus ref={inputRef} type="text" placeholder='add a new task...' value={task} onChange={e=>setTask(e.target.value)} />
      {/*Make the button position absolute and size it and color it correctly*/}
      <input className='ml-4 p-2 cursor-pointer rounded-full text-xl center bg-gray-300' type="submit" value="+" />
    </form>
    {todos.length === 0 && <p className='mx-2'>Nothing to do yet.</p>}
    <TodoList handleDelete={handleDelete} handleEdit={handleEdit} handleCompleted={handleCompleted} todos={todos}/>    

    </div>
  );
}

export default App;
