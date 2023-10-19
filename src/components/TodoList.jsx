import React from 'react'

const TodoList = ({handleDelete, todos}) => {
  return (
    <ul>
      {todos.map((item)=>{
        return <div key={item.id}>
        
      <li>{item.todo} {item.id}</li>
      <input type="button" value="Delete" onClick={()=>handleDelete(item.id)}/>
      </div>}
      )}
    </ul>
  )
}

export default TodoList