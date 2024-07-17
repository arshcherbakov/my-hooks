import { useEffect, useRef, useState } from "react";

const useDebounce = <T>(
  fn: () => void,
  ms: number,
  deps: T[]
): [boolean | null, () => void] => {
  const cancelDebounce = useRef<boolean>(false);
  const ready = useRef<boolean | null>(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const isReady = ready.current;

  useEffect(() => {
    ready.current = false;

    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (!cancelDebounce.current) {
      timer.current = setTimeout(() => {
        ready.current = true;
        fn();
      }, ms);
    }
  }, deps);

  const cancel = () => {
    cancelDebounce.current = true;

    if (timer.current) {
      clearTimeout(timer.current);
    }

    ready.current = null;
  };

  return [isReady, cancel];
};

export default useDebounce;
