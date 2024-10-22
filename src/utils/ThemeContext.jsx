// ThemeContext.js
import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check system preference for theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeGet = Cookies.get('theme');

    if (!themeGet) {
      // If no theme in cookies, set it based on system preference
      const initialTheme = prefersDark ? 'dark' : 'light';
      Cookies.set('theme', initialTheme, { expires: 365 });
      setTheme(initialTheme);
    } else {
      // Set theme from cookie value
      setTheme(themeGet);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the body class
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Update the cookie and state simultaneously
    Cookies.set('theme', newTheme, { expires: 365 });
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
