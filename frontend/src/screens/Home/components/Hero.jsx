import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";

const Hero = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
  ];

  const { theme, settheme } = useContext(ThemeContext);
//   console.log(theme);
  return (
    <div>
      <div className="my-5 flex flex-col items-center gap-5">
        <h2 className=" text-3xl font-bold text-center">
          Get top Ideas for your Project⚒️ !
        </h2>
        <h2 className=" text-center my-3">
          <strong className="text-secondary">Write Down</strong> your ideas for
          others to see!
        </h2>
      </div>
      <div className=" flex justify-center items-center">
        <select
          onChange={(e) => {
            settheme(e.target.value);
          }}
          className="border-primary select select-bordered w-1/2 max-w-xs"
        >
          <option disabled selected>
            Select Your Style!
          </option>
          {themes.map((theme) => {
            return (
              <option key={theme} value={theme}>
                {theme}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Hero;
