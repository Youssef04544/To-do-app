import React from 'react'

const TodoList = ({ handleDelete, handleCompleted, handleEdit, handleDragStart, handleDragEnter, handleDrop, todos }) => {
  return (
    <ul className='mt-10 w-full'>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} className={'cursor-move w-full p-2 my-1 border-[1px] border-gray-200 rounded-md flex items-center' + `${todo.completed ? ' opacity-50' : ''}`}
            draggable onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDrop}
          >

            <input type="checkbox" name="completed" onChange={() => handleCompleted(todo.id)} />
            <li className='inline px-2 py-1 '>{todo.task}</li>
            <input className='px-2 py-1 cursor-pointer ml-auto' type="button" value="X" onClick={() => handleDelete(todo.id)} />
            <input className='px-2 py-1 cursor-pointer ml-4' type="button" value="Edit" onClick={() => handleEdit(todo)} />

          </div>)
      }
      )}
    </ul>
  )
}

export default TodoList