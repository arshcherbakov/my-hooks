import { useEffect, useRef, useState } from "react";

const usePrevious = <T>(state: T): T => {
  const ref = useRef<T>(state);

  useEffect(() => {
    if (ref.current !== state) {
      ref.current = state;
    }
  });

  return ref.current;
};

export default usePrevious;
