import React, { useState } from 'react'

export const TodoList = ({ todo, setTodo }) => {
  // const [transition, setTransition] = useState(false)

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id !== id)
    setTodo(newTodo)
  }

  return (
    <div>
      {todo.map((item) => 
        <div key={item.id} className='todo_item'>
          <div>
            <div className='todo_title'>{item.title}</div>
            <div className='todo_subtitle'>{item.subtitle}</div>
          </div> 
          <button className='todo_btn' onClick={() => deleteTodo(item.id)}>Удалить</button>
        </div>
      )} 
    </div>
  )
}
