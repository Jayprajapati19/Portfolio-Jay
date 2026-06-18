"use client";

import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const userPref = window.localStorage.getItem("theme");
    const hasSavedChoice =
      window.localStorage.getItem("themeConfigured") === "true";
    const initialMode = hasSavedChoice && userPref === "dark" ? "dark" : "light";

    setMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode === "dark");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", mode);
    window.localStorage.setItem("themeConfigured", "true");
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
