import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import uuid from 'react-uuid'
import './styles/App.css'

function App() {
  const [todo, setTodo] = useState([
    {
      id: uuid(),
      title: 'Приготовить торт по рецепту Рената Агзамова',
      subtitle: 'Для этого потребуется просмотреть несколько роликов на ютубе, а так же пробежаться по чек-листу'
    },
    {
      id: uuid(),
      title: 'Заказать подарок для жены',
      subtitle: 'Все подробноси смотри в приложении OZON'
    },
  ])

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Список заметок: {todo.length}</h1>
        <AddTodo todo={todo} setTodo={setTodo}/>
      </div>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
