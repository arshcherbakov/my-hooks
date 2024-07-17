import { useState } from "react";
import useFirstMountState from "../../../hooks/useFirstMountState";

const DemoFerstMount = () => {
  const isFirstMount = useFirstMountState();
  const [update, setUpdate] = useState("");

  return (
    <div>
      <h1>{update}</h1>
      <span>This component is just mounted: {isFirstMount ? "YES" : "NO"}</span>
      <br />
      <button onClick={() => setUpdate("ss")}>re-render</button>
    </div>
  );
};

export default DemoFerstMount;
