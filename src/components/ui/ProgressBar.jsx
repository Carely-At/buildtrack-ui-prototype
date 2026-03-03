export default function ProgressBar({ value = 0, max = 100, size = 'md', showLabel = true, className = '' }) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };

  let color = 'bg-brand-500';
  if (pct >= 100) color = 'bg-emerald-500';
  else if (pct >= 60) color = 'bg-brand-500';
  else if (pct >= 30) color = 'bg-amber-500';
  else color = 'bg-red-400';

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-surface-600 dark:text-surface-400">Progression</span>
          <span className="text-xs font-semibold text-surface-900 dark:text-white">{Math.round(pct)}%</span>
        </div>
      )}
      <div className={`w-full ${heights[size]} bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden`}>
        <div
          className={`${heights[size]} ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}