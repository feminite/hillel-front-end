import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const themeClass = isDark ? 'dark-theme' : 'light-theme';

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={themeClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);