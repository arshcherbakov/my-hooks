import { useEffect, useState } from "react";

const usePrevious = <T>(state: T): T | null => {
  const [prevState, setPrevState] = useState<T | null>(null);

  useEffect(() => {
    if (prevState !== state) {
      setPrevState(state);
    }
  }, []);

  return prevState;
};

export default usePrevious;
