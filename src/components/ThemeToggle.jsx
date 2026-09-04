import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ style = {} }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 16px',
        borderRadius: 24,
        border: '1px solid var(--border)',
        background: 'var(--bg-secondary)',
        color: 'var(--text)',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.85rem',
        transition: 'all 0.2s ease',
        boxShadow: 'var(--shadow-card)',
        ...style
      }}
    >
      <i
        className={`pi ${isDark ? 'pi-sun' : 'pi-moon'}`}
        style={{ color: isDark ? '#F59E0B' : '#3B82F6', fontSize: '1rem' }}
      ></i>
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggle;
