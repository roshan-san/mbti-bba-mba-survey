import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Theme toggled to:", theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
