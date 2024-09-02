import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Make dinner", completed: false },
    { id: 3, title: "Go to the gym", completed: true },
    ],
    addTodo: (todo) => { },
    removeTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleTodo: (id) => { },
    
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
