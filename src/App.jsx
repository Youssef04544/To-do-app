import { useState } from 'react';


function App() {

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([])

  let globalID = 0;
  const addTodo = (e) => {
    e.preventDefault()
    setTodos(oldtodos =>{
      setTask("");
      return [...oldtodos, {todo:task,id:globalID++}]
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
    <ul>
      {todos.map((item)=>{
        return <>
      <li key={item.id}>{item.todo}</li>
      <input type="button" value="Delete" onClick={()=>handleDelete(item.id)}/>
      </>}
      )}
    </ul>
    </>
  );
}

export default App;
