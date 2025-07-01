import { useRef } from "react";
import { useTheme } from "./ThemeContext";

import Navbar from "./Navbar";
import Specimens from "./Specimens";

const NUM_SPECIMENS = 12;
const GLOW_CHANCE = 0.3;

/** Returns an array of booleans where `k` is the chance one is true */
function makeSpecimens(n = NUM_SPECIMENS, k = GLOW_CHANCE) {
  return Array.from({ length: n }, () => Math.random() < k);
}

/**
 * Our scientists have collected some specimens from the field.
 * Turn the light on and off to see which ones glow!
 */
export default function App() {
  // `useRef` allows our component to "remember" these arrays without
  // randomly re-generating them on every render.
  // `useRef` returns a mutable object { current: value }
  const fish = useRef(makeSpecimens());
  const beetles = useRef(makeSpecimens());
  const fungi = useRef(makeSpecimens());

  return (
    <div className="{theme}"> //RQ6
      <div className="wrapper">
        <Navbar />
        <main>
          <Specimens label="Fish" specimen="🐟" specimens={fish.current} />
          <Specimens
            label="Beetles"
            specimen="🪲"
            specimens={beetles.current}
          />
          <Specimens label="Fungi" specimen="🍄" specimens={fungi.current} />
        </main>
      </div>
    </div>
  );
}
