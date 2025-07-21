// https://www.youtube.com/watch?v=_AyFP5s69N4
import React, { useState, useEffect, useCallback } from "react";

export default function UseCallbackHook() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };
  const theme = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
  };

  const getList = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  return (
    <div>
      <h1>Use Callback Hook Example</h1>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => toggleTheme()}>Dark</button>
        <ListItems getList={getList} />
      </div>
    </div>
  );
}

// ListItems component
const ListItems = ({ getList }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("getList fn called");
    setList(getList());
  }, [getList]);

  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
