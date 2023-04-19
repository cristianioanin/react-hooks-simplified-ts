import { useState } from 'react';

enum CounterTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

type CounterState = {
  count: number;
  theme: CounterTheme;
};

function UseStateComponent() {
  const [count, setCount] = useState(() => 0);
  const [counterState, setCounterState]: [CounterState, Function] = useState(
    () => {
      return {
        count: 0,
        theme: CounterTheme.LIGHT,
      };
    }
  );

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrement = () => {
    setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0));
  };

  const incrementCounterState = () => {
    setCounterState((currentState: CounterState) => {
      return {
        ...currentState,
        count: currentState.count + 1,
      };
    });
  };

  const decrementCounterState = () => {
    setCounterState((currentState: CounterState) => {
      return {
        ...currentState,
        count: currentState.count > 0 ? currentState.count - 1 : 0,
      };
    });
  };

  return (
    <>
      <h1>useState</h1>

      <h2>Counter initialized with primitive number value</h2>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <h2>Counter initialized with object state value</h2>
      <button onClick={decrementCounterState}>-</button>
      <span>{counterState.count}</span>
      <button onClick={incrementCounterState}>+</button>
    </>
  );
}

export default UseStateComponent;
