import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RenderToDo from "./RenderToDo/RenderToDo";
import ToDoForm from "./SearchBar/SearchBar";

export const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosLocal = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todosLocal)

    setTodos(parsedTodos)
  }, []);

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos]);

  const onSubmit = ({ name, description }) => {
    setTodos(prev => [...prev, {
      name,
      description,
      id: uuidv4(),
      completed: false
    }])
  }

  const onToggleCheckbox = id => {

    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }

      return todo
    }))
  }

  const removeTodo = (id) => {
    const newArrTodo = todos.filter(el => el.id !== id)
    console.log('newArrTodo :>> ', newArrTodo);
    setTodos(newArrTodo)
  }

  return (
    <div className="container">
      <h1>TODOS</h1>
      <ToDoForm onSubmit={onSubmit} />
      <RenderToDo todo={todos} onToggleCheckbox={onToggleCheckbox} onRemove={removeTodo} />
    </div>
  );
};
