import { useMemo, useState, useDeferredValue, useEffect } from 'react';

export default function UseDeferredValueComponent() {
  const [input, setInput] = useState('');

  return (
    <>
      <h1>useDeferredValue</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <List input={input} />
    </>
  );
}

function List({ input }: { input: string }) {
  const LIST_SIZE = 20_000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{`${deferredInput} ${i}`}</div>);
    }

    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeferredInput: ${deferredInput}`);
  });

  return <>{list}</>;
}
