import { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';

let globalID = 0;

function App() {

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [isEditing, setIsEditing] = useState({ editing: false })
  const inputRef = useRef();
  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  const addTodo = (e) => {
    e.preventDefault()
    //Checks if we're editing a todo
    if (!isEditing.editing) {
      setTodos(oldtodos => {
        setTask("");
        return [...oldtodos, { task, id: globalID++, completed: false }]
      })
    } else {
      setTodos(oldtodos => {
        setTask('');
        setIsEditing({ editing: false })
        return oldtodos.map(todo => {
          if (todo.id === isEditing.todo.id) return { ...todo, task }
          return todo
        })
      })
    }
    inputRef.current?.focus();
  }
  const handleDelete = (id) => {
    setTodos(oldtodos => oldtodos.filter((todo) => todo.id !== id))
  }

  const handleCompleted = (id) => {
    setTodos(oldtodos => oldtodos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      return todo
    }))
  }

  const handleEdit = (todo) => {
    setTask(todo.task)
    setIsEditing({ todo, editing: true })
  }

  const handleClear = () => {
    setTodos([]);
  }

  const handleDragStart = (e, position) => {
    dragItem.current = position;
  }

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  }

  //Drops the dragged todo on the hovering position and modifies the todos list appropriately
  const handleDrop = e => {
    const copyTodos = [...todos];
    const dragItemContent = copyTodos[dragItem.current];
    copyTodos.splice(dragItem.current, 1);
    copyTodos.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(copyTodos);
  }
  //Put a validation on the form input if its empty dont pass an empty task and solve the tasklist size if i add too
  //many tasks it gets out of the border and gets messy
  return (
    <div className='mx-[10%] my-[15%] lg:mx-[30%] lg:my-[5%] min-h-[80vh] min-w-[250px] pb-6 px-2 bg-white rounded-lg relative'>
      <h1 className='text-center font-bold text-xl md:text-3xl p-6'>TODO LIST</h1>
      <form className=' w-full flex justify-center p-4 relative' onSubmit={(e) => addTodo(e)}>
        <input className='border-2 w-5/6 md:w-2/3 p-2 rounded-md md:text-2xl' autoFocus ref={inputRef} type="text" placeholder='add a new task...' value={task} onChange={e => setTask(e.target.value)} required minLength={3} />
        <input className='ml-4 p-2 h-10 w-10 flex justify-center cursor-pointer rounded-full text-xl bg-gray-300 absolute top-4 right-[-15px]' type="submit" value="+" />
      </form>
      {todos.length === 0 && <p className='m-4 md:text-2xl'>Nothing to do yet.</p>}
      <TodoList handleDelete={handleDelete} handleEdit={handleEdit} handleCompleted={handleCompleted}
        handleDragStart={handleDragStart} todos={todos} handleDragEnter={handleDragEnter} handleDrop={handleDrop} />
      {todos.length !== 0 && <button className='border-2 bg-gray-400 p-2 md:p-4 md:text-xl rounded-full absolute bottom-2 right-2 ' onClick={handleClear}>Clear</button>}
    </div>
  );
}

export default App;
