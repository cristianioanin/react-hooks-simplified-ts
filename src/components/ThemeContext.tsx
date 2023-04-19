import React, { useState, useContext } from 'react';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

// Theme context provider
const ThemeContext = React.createContext(Theme.LIGHT);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => Theme.LIGHT);

  const toggleContextTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleContextTheme}>
        {/* <button onClick={toggleContextTheme}>Toggle Theme</button> */}
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
