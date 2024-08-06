import { useState } from "react";

import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import { ThemeContext } from "./Context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNew from "./screens/AddIdea/Components/AddNew";
import AddNewScreen from "./screens/AddIdea/AddNewScreen";

const router = createBrowserRouter([
  {
    path: "/",

    element: <HomeScreen />,
  },
  {
    path: "/new",

    element: <AddNewScreen />,
  },
]);

function App() {
  const [theme, settheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, settheme }}>
      <div
        data-theme={theme}
        className=" p-10 h-full flex justify-center scroll-smooth"
      >
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
