'use client'
import React from 'react';
import { HiMoon, HiSun } from "react-icons/hi"

export const ThemeToggle = (props: { className?: string }) => {
  const [theme, setTheme] = React.useState('business');
  const toggleTheme = () => {
    setTheme(theme === 'corporate' ? 'business' : 'corporate');
  };
  React.useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <>
      <label className={`swap swap-rotate ${props.className}`}>
        <input onClick={toggleTheme} type="checkbox" />
        <HiMoon className="swap-on" size={30} />
        <HiSun className="swap-off" size={30} />
      </label>
    </>
  );
}
