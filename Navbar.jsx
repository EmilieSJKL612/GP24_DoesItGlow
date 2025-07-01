
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme(); //RQ7

  return (
    <header>
      <h1>Does it glow?</h1>
      <button
        id="toggle"
        className="material-symbols-outlined"
        aria-label="Toggle light/dark mode"
        onClick={toggleTheme} //RQ7
      >
        {isDark ? "light_mode" : "dark_mode"} //RQ7
        dark_mode
      </button>
    </header>
  );
}
