import { PRIORITY_COLORS } from '../../data/mock';

const LABELS = {
  basse: 'Basse',
  moyenne: 'Moyenne',
  haute: 'Haute',
  urgente: 'Urgente',
};

export default function PriorityBadge({ priority }) {
  const label = LABELS[priority] || priority;
  const color = PRIORITY_COLORS[priority] || 'bg-gray-100 text-gray-600';

  return (
    <span className={`badge ${color}`}>
      {label}
    </span>
  );
}