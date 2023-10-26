import React from 'react'

const TodoList = ({handleDelete,handleCompleted,handleEdit, todos}) => {
  return (
    <ul className='mt-16 w-full'>
      {todos.map((todo)=>{
        return (
      <div key={todo.id} className={'w-full p-2 border-2 border-gray-200 rounded-md flex items-center-center'+`${todo.completed?' opacity-50':''}`}>
        
      <input type="checkbox" name="completed" onChange={()=>handleCompleted(todo.id)} />
      <li className='inline px-2 py-1'>{todo.task} {todo.id}</li>
      <input className='ml-4 px-2 py-1 cursor-pointer' type="button" value="X" onClick={()=>handleDelete(todo.id)}/>
      <input className='ml-4 px-2 py-1 cursor-pointer' type="button" value="Edit" onClick={()=>handleEdit(todo)}/>
      </div>)
      }
      )}
    </ul>
  )
}

export default TodoList