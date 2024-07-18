import { useState } from "react";
import useRendersCount from "../../hooks/useRendersCount";

const DemoRenderCount = () => {
  const [update, setUpdate] = useState(0);
  const rendersCount = useRendersCount();
  console.log(rendersCount);
  return (
    <div>
      <h1>{update}</h1>
      <span>Renders count: {rendersCount}</span>
      <br />
      <button onClick={() => setUpdate((up) => up + 1)}>re-render</button>
    </div>
  );
};

export default DemoRenderCount;
