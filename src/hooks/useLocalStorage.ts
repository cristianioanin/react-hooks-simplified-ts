import { useDebugValue, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // pass a function to useDebugValue to avoid calling it in production and to avoid the performance hit
  useDebugValue(['test', { key, value }], (debugValue) => defer(debugValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function defer<T>(value: T): T {
  for (let i = 0; i < 300_000_000; i++) {}

  return value;
}
