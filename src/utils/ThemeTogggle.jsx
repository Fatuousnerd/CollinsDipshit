import './themeToggle.scss';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { DarkMode, LightMode } from '@mui/icons-material';

const ThemeToggle = () => {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <DarkMode/> : <LightMode/>}
    </button>
  );
};

export default ThemeToggle;
