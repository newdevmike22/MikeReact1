import { useState } from "react";
import VenomBack from "./images/Venom-background.png";
import SpideyBack from "./images/Spidey-background.png";
import SpideyLogo from "./images/Spidey-Logo.png";
import VenomLogo from "./images/Venom-Logo.png";

const SpideyVenomToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <img src={VenomBack} alt="Venom Background" className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${darkMode ? "opacity-100" : "opacity-0"}`} />
      <img src={SpideyBack} alt="Spidey Background" className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${darkMode ? "opacity-0" : "opacity-100"}`} />

      {/* Content */}
      <div className="relative text-center space-y-6 z-10">
        {/* Logo with rotation */}
        <img src={darkMode ? VenomLogo : SpideyLogo} alt={darkMode ? "Venom Logo" : "Spider-Man Logo"} className={`mx-auto w-[500px] h-auto object-contain transition-all duration-[1000ms] transform ${darkMode ? "rotate-[15deg]" : "rotate-0"}`} />

        {/* Toggle Switch */}
        <div onClick={() => setDarkMode(!darkMode)} className="w-[200px] h-10 bg-white rounded-full flex items-center px-1 cursor-pointer transition-colors duration-600 mx-auto">
          <div
            className={`w-8 h-8 bg-[#e60510] rounded-full shadow-md transform transition-all duration-500
              ${darkMode ? "translate-x-[160px] shadow-lg animate-pulse" : "translate-x-0 shadow-lg animate-pulse"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SpideyVenomToggle;
