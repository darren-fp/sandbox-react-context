import { useState } from "react";
import NestedComponent2A from "./NestedComponent2A";
import NestedComponent2B from "./NestedComponent2B";

const Component2 = () => {
  const [showComponent2A, setShowComponent2A] = useState(true);
  const [showComponent2B, setShowComponent2B] = useState(false);

  return (
    <div className="component-2">
      Component 2
      <button onClick={() => setShowComponent2A(!showComponent2A)}>
        Toggle component 2A
      </button>
      <button onClick={() => setShowComponent2B(!showComponent2B)}>
        Toggle component 2B
      </button>
      {showComponent2A && <NestedComponent2A />}
      {showComponent2B && <NestedComponent2B />}
    </div>
  );
};

export default Component2;
