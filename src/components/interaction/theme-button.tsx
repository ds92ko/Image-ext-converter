'use client';

import { useTheme } from 'next-themes';
import { button } from '@/styles/forms.css';

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className={`${button} icon`}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <i className={`bx bx-${resolvedTheme === 'light' ? 'sun' : 'moon'}`}></i>
    </button>
  );
};

export default ThemeButton;
