import { useState, useEffect, useMemo } from 'react';
import { Theme } from '../enums/theme.enum';

export default function UseMemoComponent() {
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState(Theme.LIGHT);
  const doubleValue = useMemo(() => slowDouble(value), [value]);

  const themeStyleObject = {
    base: 'theme-card',
    theme: `theme--${theme}`,
  };

  // fails due to reference equality check
  useEffect(() => {
    console.log('useEffect for object not memoized: theme updated');
  }, [themeStyleObject]);

  const themeStyleObjectMemoized = useMemo(() => {
    return {
      base: 'theme-card',
      theme: `theme--${theme}`,
    };
  }, [theme]);

  // bypass reference equality check
  useEffect(() => {
    console.log('useEffect for memoized object: theme updated');
  }, [themeStyleObjectMemoized]);

  return (
    <>
      <h1>useMemo</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button className="theme--light" onClick={() => setTheme(Theme.LIGHT)}>
        Light Theme
      </button>
      <button className="theme--dark" onClick={() => setTheme(Theme.DARK)}>
        Dark Theme
      </button>
      <div className={`theme-card theme--${theme}`}>
        Double of {value} is {doubleValue}
      </div>
    </>
  );
}

function slowDouble(value: number) {
  for (let i = 0; i < 1000000000; i++) {}
  return value * 2;
}
