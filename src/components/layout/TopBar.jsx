import { Bell, Search } from 'lucide-react';
import { useState } from 'react';
import Avatar from '../ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

export default function TopBar({ title }) {
  const { user } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="h-16 bg-white dark:bg-surface-900 border-b border-gray-200 dark:border-surface-700 flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
      <div className="flex items-center gap-4 pl-12 lg:pl-0">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        {searchOpen && (
          <div className="animate-fade-in">
            <input
              type="text"
              placeholder="Rechercher..."
              className="input-field w-48 lg:w-64 text-sm"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        )}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-800 transition-colors"
        >
          <Search className="w-5 h-5 text-gray-500" />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-800 transition-colors relative">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {user && (
          <div className="hidden sm:flex items-center gap-2 ml-2 pl-2 border-l border-gray-200 dark:border-surface-700">
            <Avatar name={user.name} size="sm" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:inline">{user.name}</span>
          </div>
        )}
      </div>
    </header>
  );
}