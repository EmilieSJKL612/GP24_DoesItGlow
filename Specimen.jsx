
import { useTheme } from "./ThemeContext";

export default function Specimen({ glow, specimen }) {
  
  const { isDark } = useTheme();


  //goal: 1. adds the class glow if BOTH a. glow is true and b. isDark is true  2. else adds nothing ("") -> like RQ7 and RQ1-3: ternary operator for better reading 
  return (  //Em: got so many error msgs when writing this part... use temporal literal to avoid nuisances
    <li className={`specimen${glow && isDark ? " glow" : ""}`}>
      {specimen}
    </li>
  )
  
}
