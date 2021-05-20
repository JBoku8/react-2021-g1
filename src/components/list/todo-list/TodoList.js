import { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoProvider } from '../../../providers/TodoProvider';

import './todo-list.css';

function TodoList() {
  const { todoList } = useContext(TodoProvider);
  return (
    <div className="list-group">
      {todoList.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
export default TodoList;
