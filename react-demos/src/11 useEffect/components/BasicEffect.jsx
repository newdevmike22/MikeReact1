// Using useEffect, log a message to the console.

import { useState, useEffect } from "react";

const BasicEffect = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!text) return;

    console.log("I'm hit!");
    document.title = text;
  });

  return (
    <div>
      <h1>{text}</h1>
      <button className="bg-[#fc0313] text-[#fff] px-4 rounded" onClick={() => setText("I am hit!")}>
        Hit Me!
      </button>
    </div>
  );
};

export default BasicEffect;
