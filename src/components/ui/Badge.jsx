export default function Badge({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-surface-100 text-surface-700 dark:bg-surface-800 dark:text-surface-300',
    primary: 'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300',
    success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    premium: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white',
  };

  return (
    <span className={`badge ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}