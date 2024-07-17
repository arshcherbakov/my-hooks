import { useEffect, useRef } from "react";

const useFirstMountState = (): boolean => {
  const isFerstMount = useRef<boolean>(true);

  useEffect(() => {
    if (isFerstMount.current) {
      isFerstMount.current = false;
    }
  }, []);

  return isFerstMount.current;
};

export default useFirstMountState;
