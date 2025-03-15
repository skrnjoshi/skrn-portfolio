import { useEffect, useState } from "react";
import "../assets/css/styles.css";
import { Brightness3, LightMode } from "@mui/icons-material"; // Correct import

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <LightMode style={{ color: "yellow", fontSize: "2rem" }} />
      ) : (
        <Brightness3 style={{ color: "rgb(77, 66, 66)", fontSize: "2rem" }} />
      )}
    </button>
  );
}
