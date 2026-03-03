export default function StatCard({ icon: Icon, label, value, change, changeType = 'positive', className = '' }) {
  return (
    <div className={`card p-5 ${className} animate-slide-up`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">{label}</p>
          <p className="mt-1 text-2xl font-bold text-surface-900 dark:text-white">{value}</p>
          {change && (
            <p className={`mt-1 text-xs font-medium ${changeType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
              {changeType === 'positive' ? '+' : ''}{change}
            </p>
          )}
        </div>
        {Icon && (
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-900/20">
            <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          </div>
        )}
      </div>
    </div>
  );
}