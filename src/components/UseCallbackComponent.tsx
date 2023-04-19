import { useState, useEffect, useCallback } from 'react';
import { Theme } from '../enums/theme.enum';

export default function UseCallbackComponent() {
  const [startValue, setStartValue] = useState(1);
  const [valuesCount, setValuesCount] = useState(3);
  const [theme, setTheme] = useState(Theme.LIGHT);

  const getListValues = useCallback(
    (start: number, count: number = 3) => {
      count = Math.min(count, 20);

      const values: number[] = [];
      const end = start + count;

      if ((Number.isNaN(count) && Number.isNaN(start)) || Number.isNaN(start)) {
        return values;
      }

      if (Number.isNaN(count)) {
        return [start];
      }

      for (let i = start; i < end; i++) {
        values.push(i);
      }

      return values;
    },
    [startValue, valuesCount]
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    });
  };

  return (
    <div>
      <h1>useCallback</h1>
      <div>
        <label htmlFor="start">Start value:</label>
        <input
          type="number"
          value={startValue.toString()}
          onChange={(e) => setStartValue(parseInt(e.target.value))}
          id="start"
        />
      </div>
      <div>
        <label htmlFor="count">Values to be listed:</label>
        <input
          type="number"
          value={valuesCount.toString()}
          onChange={(e) => setValuesCount(parseInt(e.target.value))}
          min="1"
          max="20"
          id="count"
        />
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={`theme--${theme}`}>
        <List
          getListValues={getListValues}
          startValue={startValue}
          valuesCount={valuesCount}
        />
      </div>
    </div>
  );
}

function List({
  getListValues,
  startValue,
  valuesCount,
}: {
  getListValues: (x: number, y: number) => number[];
  startValue: number;
  valuesCount: number;
}) {
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    console.log('useEffect: values updated');
    setValues(getListValues(startValue, valuesCount));
  }, [getListValues]);

  return (
    <>
      {values.map((value) => (
        <div key={value}>{value}</div>
      ))}
    </>
  );
}
