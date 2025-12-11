import { useState, useEffect } from "react";

const MultiplyEffect = () => {
  const [multiply, setMultiply] = useState(2);

  useEffect(() => {
    console.log("I was clicked!");
    document.title = `Increment ${multiply}`;
  }, [multiply]);
  return (
    <div>
      <h1>{multiply}</h1>
      <button className="bg-black text-white px-4 rounded" onClick={() => setMultiply(multiply * 2)}>
        Click Me
      </button>
    </div>
  );
};

export default MultiplyEffect;
