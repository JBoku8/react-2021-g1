import React, { useState, useEffect } from 'react';

import { API_SERVICE } from '../services/api';

export const TodoProvider = React.createContext(null);

// Provider -> store value
// Consumer -> use value

function TodoProviderComponent({ children }) {
  const [todoList, setTodoList] = useState([]);

  const loadTodoData = async () => {
    const data = await API_SERVICE.getTodoListAsync({ limit: 5, start: 20 });
    setTodoList(data);
  };

  useEffect(() => {
    loadTodoData();
  }, []);

  const onTodoChange = (todo) => {
    if (!todo.completed) {
      const index = todoList.findIndex((el) => el.id === todo.id);

      const newState = [
        ...todoList.slice(0, index),
        {
          ...todo,
          completed: !todo.completed,
        },
        ...todoList.slice(index + 1),
      ];

      setTodoList(newState);
    } else {
    }
  };

  const onTodoAdd = (newTodo) => {
    const newList = [...todoList, newTodo];
    setTodoList(newList);
  };

  return (
    <TodoProvider.Provider
      value={{ todoList, setTodoList, onTodoChange, onTodoAdd }}>
      {children}
    </TodoProvider.Provider>
  );
}

export default TodoProviderComponent;
