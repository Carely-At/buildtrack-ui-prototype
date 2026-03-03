import { ROLE_LABELS, ROLE_COLORS } from '../../data/mock';

export default function RoleBadge({ role, size = 'sm' }) {
  const label = ROLE_LABELS[role] || role;
  const color = ROLE_COLORS[role] || 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
  const sizeClass = size === 'lg' ? 'px-3 py-1 text-sm' : 'px-2.5 py-0.5 text-xs';

  return (
    <span className={`badge ${color} ${sizeClass}`}>
      {label}
    </span>
  );
}