import { useReducer, useState } from 'react';

class Todo {
  constructor(
    public text: string,
    public id: number = Date.now(),
    public complete: boolean = false
  ) {}
}

enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

enum TodoActionType {
  ADD = 'add',
  REMOVE = 'remove',
  TOGGLE = 'toggle',
}

const countReducer = (state: { count: number }, action: ActionType) => {
  switch (action) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: ++state.count,
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count: --state.count,
      };
    default:
      return state;
  }
};

const todoReducer = (
  state: Todo[],
  action: { type: string; payload: number | string }
) => {
  switch (action.type) {
    case TodoActionType.ADD:
      return [...state, new Todo(action.payload.toString())];
    case TodoActionType.REMOVE:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case TodoActionType.TOGGLE:
      return state.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }

        return todo;
      });
    default:
      return state;
  }
};

export default function UseReducerComponent() {
  const [state, dispatchCount] = useReducer(countReducer, { count: 0 });
  const [todos, dispatchTodo] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState('');

  const increment = () => {
    dispatchCount(ActionType.INCREMENT);
  };

  const decrement = () => {
    dispatchCount(ActionType.DECREMENT);
  };

  const addTodo = () => {
    if (!todoText) return;

    dispatchTodo({
      type: TodoActionType.ADD,
      payload: todoText,
    });
  };

  const removeTodo = (id: number) => {
    dispatchTodo({
      type: TodoActionType.REMOVE,
      payload: id,
    });
  };

  const toggleTodo = (id: number) => {
    dispatchTodo({
      type: TodoActionType.TOGGLE,
      payload: id,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoText) return;

    dispatchTodo({
      type: TodoActionType.ADD,
      payload: todoText,
    });
  };

  return (
    <>
      <h1>useReducer</h1>
      <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="button" onClick={addTodo} disabled={!todoText}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <span className={todo.complete ? 'todo--done' : 'todo--pending'}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
