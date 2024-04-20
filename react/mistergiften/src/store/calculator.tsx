import React from "react";
import mobx, {
  autorun,
  action,
  computed,
  makeObservable,
  observable,
} from "mobx";

interface ITodo {
  completed: boolean;
  task: string;
  assignee: null;
}

class TodoStore {
  todos: Array<ITodo> = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo: ITodo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) {
      return "<none>";
    }
    var nextTodo: ITodo | undefined = this.todos.find(
      (todo: ITodo) => todo.completed === false
    );
    return `<p>Next todo: "${nextTodo ? nextTodo.task : "<none>"} </p>.
     Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task: string) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}
export default new TodoStore();
