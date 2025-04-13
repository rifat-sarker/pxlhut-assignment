"use client";

import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdModeNight } from "react-icons/md";



const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="p-2 bg-black text-white rounded-md"
    >
      {isDarkMode ? (
        <CiLight size={24}/>
      ) : (
        <MdModeNight size={24} />
      )}
    </button>
  );
};

export default DarkModeToggle;
