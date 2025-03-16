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
    console.log("Current Theme:", theme); // Debugging
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
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
