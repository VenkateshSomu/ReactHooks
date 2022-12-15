import React, { useState } from "react";

/**
 * useState with Ojbect example
 * using ... operator
 */

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={name.firstName}
        //onChange={(e) => setName({ firstName: e.target.value })} -> it will update the state with only 1 attribut i.e {firstName:"somename"}
        onChange={(e) => setName({ ...name, firstName: e.target.value })} // ...name, will keep existing state and then adds or modify the new values
      />
      <input
        type="text"
        placeholder="Last Name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>{JSON.stringify(name)}</p>
      <h2>Your first name is: {name.firstName}</h2>
      <h2>Your last name is: {name.lastName}</h2>
    </div>
  );
}

export default HookCounterThree;
