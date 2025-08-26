import React, { forwardRef, useRef } from "react";

const CustomInput = ({ props }, ref) => {
  // const inputRef = useRef();
  return (
    <div>
      <h1>Use ImperativeHandle Hook Example</h1>
      <div>
        <input type="text" ref={ref} placeholder="Enter your content here" />
      </div>
    </div>
  );
};
export default forwardRef(CustomInput);
