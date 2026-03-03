import { NavLink, useNavigate } from 'react-router-dom';
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Avatar from '../ui/Avatar';
import RoleBadge from '../ui/RoleBadge';
import ThemeToggle from '../ui/ThemeToggle';

export default function Sidebar({ links, basePath, accentClass = '', brandColor = 'text-brand-600 dark:text-brand-400' }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const linkClass = accentClass || 'sidebar-link';
  const activeLinkClass = accentClass ? `sidebar-link ${accentClass}` : 'sidebar-link';

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-gray-200 dark:border-surface-700 ${collapsed ? 'justify-center' : ''}`}>
        <div className={`w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-sm">BT</span>
        </div>
        {!collapsed && <span className={`text-lg font-bold ${brandColor}`}>BuildTrack</span>}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={`${basePath}${link.to}`}
            end={link.to === '' || link.to === '/'}
            className={({ isActive }) =>
              `${isActive ? activeLinkClass + ' active' : 'sidebar-link'} ${collapsed ? 'justify-center px-2' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            <link.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{link.label}</span>}
            {!collapsed && link.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {link.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-200 dark:border-surface-700 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-800 transition-colors hidden lg:flex"
          >
            {collapsed ? <ChevronRight className="w-4 h-4 text-gray-500" /> : <ChevronLeft className="w-4 h-4 text-gray-500" />}
          </button>
        </div>

        {!collapsed && user && (
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar name={user.name} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
              <RoleBadge role={user.role} />
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className={`sidebar-link w-full text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 ${collapsed ? 'justify-center px-2' : ''}`}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-white dark:bg-surface-850 shadow-md border border-gray-200 dark:border-surface-700"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white dark:bg-surface-900 border-r border-gray-200 dark:border-surface-700 animate-slide-in-right">
            {sidebarContent}
          </aside>
        </div>
      )}

      <aside className={`hidden lg:flex flex-col ${collapsed ? 'w-20' : 'w-64'} h-screen bg-white dark:bg-surface-900 border-r border-gray-200 dark:border-surface-700 transition-all duration-300 flex-shrink-0`}>
        {sidebarContent}
      </aside>
    </>
  );
}