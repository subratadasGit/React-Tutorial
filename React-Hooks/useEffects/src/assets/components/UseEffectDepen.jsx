import React, { useEffect, useState } from "react";

const UseEffectDepen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 10000);
  }, [count, Name]);
  //independent useEffect

  return (
    <>
      <h4>
        So this is the auto count which I create using UseEffect Dependency
        version
      </h4>
      {count}
    </>
  );
};

export default UseEffectDepen;
