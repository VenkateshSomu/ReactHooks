import React, { useState } from "react";

/**
 * useState with an Array values
 * ...items, will keep the existing values and append new items to it
 * @returns
 */
function HookCounterFour() {
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={() => addItems()}>Add Items</button>

      <ul>
        {items?.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
      <p>{JSON.stringify(items)}</p>
    </div>
  );
}

export default HookCounterFour;
