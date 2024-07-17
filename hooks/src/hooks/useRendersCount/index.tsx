import { useRef } from "react";

const useRendersCount = (): number => {
  const countRenders = useRef<number>(0);

  return (countRenders.current += 1);
};

export default useRendersCount;
