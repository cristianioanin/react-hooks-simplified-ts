import { useLayoutEffect, useState, useRef } from 'react';

export default function UseLayoutEffectComponent() {
  const [count, setCount] = useState(0);

  // synchronously re-render
  useLayoutEffect(() => {
    console.log('useLayoutEffect: ', count);
  }, [count]);

  return (
    <>
      <h1>useLayoutEffect</h1>
      <div>{count}</div>
      <button onClick={() => setCount((currentCount) => ++currentCount)}>
        Increment
      </button>
      <Modal />
    </>
  );
}

function Modal() {
  const [isShowing, setIsShowing] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!isShowing) {
      return;
    }

    if (popupRef.current === null || buttonRef.current === null) {
      return;
    }

    const { bottom, height } = buttonRef.current!.getBoundingClientRect();

    popupRef.current!.style.top = `${bottom + height}px`;
  }, [isShowing]);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsShowing((state) => !state)}>
        Toggle modal
      </button>
      {isShowing && (
        <div ref={popupRef} style={{ position: 'absolute' }}>
          <h1>Modal</h1>
          <p>Modal content</p>
        </div>
      )}
    </>
  );
}
