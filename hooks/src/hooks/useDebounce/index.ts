import { useEffect, useRef } from "react";

const debounce = (fn: () => void, ms: number) => {
  return setTimeout(() => {
    fn();
  }, ms);
};

const useDebounce = <T>(
  fn: () => void,
  ms: number,
  deps: T[]
): [boolean | null, () => void] => {
  const ready = useRef<boolean | null>(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const isReady = ready.current;

  const clear = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const cancel = () => {
    clear();
    ready.current = null;
  };

  useEffect(() => {
    ready.current = false;

    clear();

    ready.current = true;
    timer.current = debounce(fn, ms);

    return cancel;
  }, deps);

  return [isReady, cancel];
};

export default useDebounce;
