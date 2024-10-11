import { useState } from "react";

export function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <div>Hello i am conditonally rendered</div> : null}
    </div>
  );
}
