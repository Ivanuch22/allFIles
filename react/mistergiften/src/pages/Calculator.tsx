import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import ToDoStore from "../store/calculator";
import store from "../store/calculator";
interface IComponent {
  store?: any;
  todo?: any;
}
const TodoList: React.FC<IComponent> = observer(() => {
  const onNewTodo = () => {
    store.addTodo(prompt("Enter a new todo:", "coffee plz") || "");
  };
  useEffect(() => {
    console.log(store.report);
  }, [store]);
  return (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      <ul>
        {store.todos.map((todo: any, idx: number) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <div>Loading </div> : null}
      <button className="firstSection__button" onClick={onNewTodo}>
        New Todo
      </button>
      <div>(doudle-click a todo to edit)</div>
    </div>
  );
});
const TodoView: React.FC<IComponent> = observer(({ todo }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };
  const onRename = () => {
    todo.task = prompt("Task name", todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        style={{ display: "inline-block" }}
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
    </li>
  );
});
export default TodoList;
