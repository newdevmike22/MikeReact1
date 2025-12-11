import { useState, useEffect } from "react";

const PracticeOne = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button className="bg-black text-white px-4" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default PracticeOne;
