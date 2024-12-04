import { useEffect, useRef } from "react";

const useFirstMountState = (): boolean => {
  const isFirstMount = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    }
  }, []);

  return isFirstMount.current;
};

export default useFirstMountState;
