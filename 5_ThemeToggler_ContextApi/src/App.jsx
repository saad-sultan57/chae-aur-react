import { React, useState, useEffect } from "react";
import Card from "./components/Card";
import ToggleBtn from "./components/ToggleBtn";
import { ThemeProvider } from "./context/theme";

const App = () => {
  const [themeMode, setthemeMode] = useState("light");

  // Dark Theme
  const darkTheme = () => {
    setthemeMode("dark");
  };
  // Light Theme
  const lightTheme = () => {
    setthemeMode("light");
  };

  // Actual Change In Theme

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ToggleBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
