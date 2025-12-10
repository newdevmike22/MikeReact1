import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";

const LightDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-[2000ms] ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="text-center space-y-6">
        {/* ICON */}
        <FaLightbulb
          className={`mx-auto text-[6rem] transition-all duration-[2000ms] 
          ${darkMode ? "text-white" : "text-black"}`}
        />
        <h1 className="text-4xl font-bold transition-all duration-[2000ms">{darkMode ? "Dark Mode" : "Light Mode"}</h1>

        {/* Toggle Switch */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="w-[200px] h-10 bg-gray-300 rounded-full flex items-center px-1 cursor-pointerw-20 h-10 bg-gray-300 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-600 
                     dark:bg-gray-600"
        >
          <div
            className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-all duration-560
            ${darkMode ? "translate-x-[160px] w-8" : "translate-x-0 w-8"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LightDarkMode;
