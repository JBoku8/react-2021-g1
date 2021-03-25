import { useState } from "react";
import AddTodoForm from "../../components/forms/add-todo-form";
import TodoList from "../../components/list/todo-list";

import TodoListArray from "../../data/todo-list";

function TodoHome(props) {
  const [todoList, setTodoList] = useState(TodoListArray);

  const onTodoChange = (todo) => {
    if (todo.completed) {
      const newList = todoList.filter((f) => f.id !== todo.id);
      setTodoList(newList);
      // removal
    } else {
      const newTodo = {
        ...todo,
        completed: !todo.completed,
      };

      const newList = todoList.filter((f) => f.id !== todo.id);
      newList.push(newTodo);
      // change status
      setTodoList(newList);
    }
  };

  const onTodoAdd = (newTodo) => {
    const newList = [...todoList, newTodo];
    setTodoList(newList);
  };

  // newObject !== oldObject

  return (
    <div className="row">
      <h1>Todo</h1>
      <div className="col-6">
        <AddTodoForm onTodoAdd={onTodoAdd} />
      </div>
      <div className="col-6">
        <TodoList data={todoList} onTodoChange={onTodoChange} />
      </div>
    </div>
  );
}

export default TodoHome;
