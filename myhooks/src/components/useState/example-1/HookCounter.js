import React, { useState } from "react";

function HookCounter(){
    const [count, setCount ] = useState(0);
    return <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}

export default HookCounter;