import React from 'react'

const TodoList = ({handleDelete, todos}) => {
  return (
    <ul className='mt-16 w-full'>
      {todos.map((item)=>{
        return <div key={item.id}>
        
      <li className='inline bg-white px-2 py-1'>{item.todo} {item.id}</li>
      <input className='ml-4 px-2 py-1 cursor-pointer bg-gray-300' type="button" value="Delete" onClick={()=>handleDelete(item.id)}/>
      </div>}
      )}
    </ul>
  )
}

export default TodoList