

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);


//LN: 1. https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f  2. https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
//Em: 1. initial thought -- can use ternary operator as LN#1, but it's a bit complicated... 2. Or... I'll try with T or F for dark mode...

//LN: 1. https://www.w3schools.com/jquery/traversing_prev.asp  2. https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling
//Em: how to get the state (previous state) and flip/reverse it?


export function ThemeProvider({ children }) {

    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark((prev) => !prev);
  
    const value = {
      isDark,
      theme: isDark ? "dark" : "light",
      toggleTheme,

};

return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

}


//Em: RQ3 -- hook (useContext) to fetch/use the context

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  }



