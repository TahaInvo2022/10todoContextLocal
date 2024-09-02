import { useEffect, useState } from 'react';

import './App.css'
import { TodoProvider, useTodoContext } from './context'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((old) => [...old, {
      id: Date.now(),
      ...newTodo
    }])
  }

  const removeTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter(el => el.id !== id))
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((oldTodos) => oldTodos.map(el => el.id === id ? updatedTodo : el))
  }

  const toggleTodo = (id) => {
    setTodos((oldTodos) => oldTodos.map(el => el.id === id ? { ...el, completed: !el.completed } : el))
  }


  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    if (localTodos && localTodos.lenght > 0) setTodos(localTodos)

  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map(el => {
              return (
                <div key={el.id}>
                  <TodoItem todo={el} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
