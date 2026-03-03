import { STATUS_LABELS, STATUS_COLORS } from '../../data/mock';

export default function StatusBadge({ status }) {
  const label = STATUS_LABELS[status] || status;
  const color = STATUS_COLORS[status] || 'bg-gray-100 text-gray-600';

  return (
    <span className={`badge ${color}`}>
      {label}
    </span>
  );
}