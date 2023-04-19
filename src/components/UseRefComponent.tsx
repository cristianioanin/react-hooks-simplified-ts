import { useState, useEffect, useRef } from 'react';

export default function UseRefComponent() {
  const [name, setName] = useState(() => '');
  const renderRef = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentStateRef = useRef<string>();

  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  useEffect(() => {
    currentStateRef.current = name;
  }, [name]);

  const focus = () => inputRef.current?.focus();

  return (
    <>
      <h1>useRef</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name}, but it used to be {currentStateRef.current}.
      </div>
      <div>
        Component rendered {renderRef.current} time
        {renderRef.current > 1 ? 's' : ''}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
