/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */

import { useState } from "react";
import ThemeContext from "./ThemeContext";
const ThemeState = (props) => {
  const name = "chintan";
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ name, theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
