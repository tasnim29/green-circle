import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Hooks/useDarkSide";

export default function DarkMode() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "dark");

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "0" }}
      checked={darkSide}
      onChange={toggleDarkMode}
      size={25}
      sunColor="#facc15"
      moonColor="#e2e8f0"
    />
  );
}
