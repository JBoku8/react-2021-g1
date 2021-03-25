import { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./todo-list.css";

function TodoList({ data = [], onTodoChange }) {
  useEffect(() => {
    // console.info("TODO LIST");
    // console.log(data);
  }, [data]);

  return (
    <div className="list-group">
      {data.map((todo) => {
        return (
          <TodoListItem todo={todo} key={todo.id} onChange={onTodoChange} />
        );
      })}
    </div>
  );
}
export default TodoList;
