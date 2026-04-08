import { useState } from "react";

export default function ThemeChange() {

  const [theme, setTheme] = useState('light');
  
  document.body.className = theme;

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.body.className = newTheme;
  }

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode a Geç' : 'Light Mode a Geç'}
      </button>
    </>
  )
}