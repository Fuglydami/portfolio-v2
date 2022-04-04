import React, { useEffect, useState } from "react";
import { setTheme } from "../../Utils/themes";
import {UilSun, UilMoon} from "@iconscout/react-unicons";

function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <>
      {togClass === "light" ? (
        <UilSun
          className="change-theme"
          onClick={handleOnClick}
        />
      ) : (
        <UilMoon
          className="change-theme"
          onClick={handleOnClick}
        />
      )}
    </>
  );
}

export default Toggle