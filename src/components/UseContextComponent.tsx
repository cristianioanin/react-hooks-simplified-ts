import React, { useState, useContext } from 'react';
import { ThemeProvider, useTheme, useThemeUpdate } from './ThemeContext';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeContext = React.createContext(Theme.LIGHT);

function UseContextComponent() {
  const [theme, setTheme] = useState(() => Theme.LIGHT);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    });
  };

  return (
    <>
      <h1>useContext</h1>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemeFunctionComponent />
        <ThemeClassComponent />
      </ThemeContext.Provider>
      <h2>useContext w/ dedicated Theme Provider</h2>
      <ThemeProvider>
        <ThemeFunctionComponentCustomHooks></ThemeFunctionComponentCustomHooks>
      </ThemeProvider>
      {/* <ThemeProvider>
        <ThemeClassComponent></ThemeClassComponent>
      </ThemeProvider> */}
    </>
  );
}

function ThemeFunctionComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`theme-card theme--${theme}`}>
      <h2>Theme Function Component</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
}

function ThemeFunctionComponentCustomHooks() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={`theme-card theme--${theme}`}>
        <h2>Theme Function Component</h2>
        <p>Current theme: {theme}</p>
      </div>
    </>
  );
}

class ThemeClassComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className={`theme-card theme--${theme}`}>
            <h2>Theme Class Component</h2>
            <p>Current theme: {theme}</p>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default UseContextComponent;
