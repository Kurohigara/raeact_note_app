import React, { useState } from 'react'
import uuid from 'react-uuid';

export const AddTodo = ({ todo, setTodo }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  const addNewTodo = () => {
    if (value.length && value2.length > 0) {
      let newTodo = [...todo, {
        id: uuid(),
        title: value,
        subtitle: value2,
      }]
      setTodo(newTodo)
      setValue('')
      setValue2('')
      setOpen(false)
    }

    else {
      alert('Нужно заполнить поля "Название" и "Описание"!')
    }
  }

  return (
    <div>
      <button className='addTodo' onClick={() => setOpen(true)}>Добавить</button>
      <div className={`overlay close ${open ? 'show' : ''}`}>
        <div className='modal animated'>
          <div className='modal_content'>
            <div className='modal_input_inputs'>
              <input
                type="text" 
                placeholder='Название заметки'
                className='modal_input_title'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text" 
                placeholder='Описание заметки'
                className='modal_input_title2'
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
            </div>
            <button className='addTodo_btn' onClick={addNewTodo}>Добавить</button>
          </div>
          <div>
            <button className='close_modal' onClick={() => setOpen(false)}>x</button>
          </div>
        </div>
      </div>
    </div>
  )
}
