import React, { useRef } from "react";
import CustomInput from "./CustomInput";
// example 1 using useRef to focus on a text input
// as the input is in the same component, we can use useRef to focus on it.

const UseImperativeHandleHook = () => {
  /* 
    // Example 1;
    const myInputRef = useRef();
  const handleInputFocus = () => {
    myInputRef.current.focus();
  };
  return (
    <div>
      <h1>Use Imperative Handle Hook</h1>

      <div>
        <input type="text" ref={myInputRef} />
        <button onClick={() => handleInputFocus()}>Focus</button>
      </div>
    </div>
  ); */

  // Example 2: Using Custom Input Component

  const handleInputFocus = () => {
    parentRef.current.foucs();
  };
  const parentRef = useRef();
  return (
    <>
      <CustomInput ref={parentRef} />
      <button onClick={() => handleInputFocus()}>
        Focus on the CustomInput comp input
      </button>
    </>
  );
};

export default UseImperativeHandleHook;
