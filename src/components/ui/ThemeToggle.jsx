import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-800 transition-colors ${className}`}
      aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      {dark ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
}