import { useContext, useEffect } from 'react';
import { TodoProvider } from '../../../providers/TodoProvider';
import { API_SERVICE } from '../../../services/api';

function TodoListItem({ todo }) {
  const { onTodoChange } = useContext(TodoProvider);

  useEffect(() => {
    (async () => {
      API_SERVICE.getTodoItemAsync(todo.id);
    })();
  }, [todo]);

  return (
    <div
      className={`list-group-item list-group-item-action list-group-item-${
        todo.completed ? 'success' : 'danger'
      }`}
      onKeyUp={() => onTodoChange(todo)}>
      {todo.title}
    </div>
  );
}

export default TodoListItem;
