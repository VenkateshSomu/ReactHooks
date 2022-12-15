import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  const incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1); it gives the result of 1;
      setCount((prevCount) => prevCount + 1);
      // it's prefered to use PrevCount when incrementing
    }
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => incrementBy5()}>Increment By 5</button>
    </>
  );
}

export default HookCounterTwo;
