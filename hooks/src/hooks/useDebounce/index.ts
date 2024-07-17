import { useEffect, useRef, useState } from "react";

interface IUseDebounce {
  isReady: boolean | null;
  cancel: () => void;
}

const useDebounce = <T>(
  fn: () => void,
  ms: number,
  deps: T[]
): IUseDebounce => {
  const [isReady, setIsReady] = useState<boolean | null>(null);
  const [cancelDebounce, setCancelDebounce] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsReady(false);

    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (!cancelDebounce) {
      timer.current = setTimeout(() => {
        fn();
      }, ms);
    }

    return () => setIsReady(true);
  }, deps);

  const cancel = () => {
    setCancelDebounce(false);
    setIsReady(null);
  };

  return {
    isReady,
    cancel,
  };
};

export default useDebounce;
