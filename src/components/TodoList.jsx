import React from 'react'

const TodoList = ({handleDelete, todos}) => {
  return (
    <ul className='mt-16 w-full'>
      {todos.map((item)=>{
        return <div key={item.id} className='w-full p-2 border-2 border-gray-200 rounded-md'>
        
      <li className='inline px-2 py-1'>{item.todo} {item.id}</li>
      <input className='ml-4 px-2 py-1 cursor-pointer' type="button" value="X" onClick={()=>handleDelete(item.id)}/>
      </div>}
      )}
    </ul>
  )
}

export default TodoList