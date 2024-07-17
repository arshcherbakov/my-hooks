import { useState } from "react";
import usePrevious from "../../hooks/usePrevious";

const DemuUsePrev = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  );
};

export default DemuUsePrev;
