import { useState, useEffect } from "react";
export default function Hooks() {
  const [hook, setHook] = useState(5);

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      {hook}
      <button onClick={() => setHook(hook + 1)}> + </button>
    </div>
  );
}
