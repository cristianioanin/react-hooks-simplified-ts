import { useState, useTransition } from 'react';

export default function UseTransitionComponent() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);

  const LIST_SIZE = 20_000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    // use startTransition to batch low-priority updates
    startTransition(() => {
      const l = [];

      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(`${e.target.value} ${i}`);
      }

      setList(l);
    });
  };

  return (
    <>
      <h1>useTransition</h1>
      <input type="text" value={input} onChange={handleChange} />
      <div>{isPending ? 'Loading...' : 'Ready'}</div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}
