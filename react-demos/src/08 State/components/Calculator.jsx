import { useState } from "react";

import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import { HiX } from "react-icons/hi";

import "./style.css";

const Calculator = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);
  const multiply = () => setCount(count * 2);

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={add}>
          <FaPlus />
        </button>
        <button onClick={subtract}>
          <RiSubtractFill />
        </button>
        <button onClick={multiply}>
          <HiX />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
