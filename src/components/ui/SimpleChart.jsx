export function BarChart({ data, dataKey, labelKey, height = 200, color = '#3b82f6' }) {
  if (!data || data.length === 0) return null;
  const maxVal = Math.max(...data.map(d => d[dataKey]));

  return (
    <div className="w-full" style={{ height }}>
      <div className="flex items-end justify-between h-full gap-2 px-1">
        {data.map((item, i) => {
          const barH = maxVal > 0 ? (item[dataKey] / maxVal) * 100 : 0;
          return (
            <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
              <span className="text-[10px] font-medium text-surface-600 dark:text-surface-400 mb-1">
                {item[dataKey]}
              </span>
              <div
                className="w-full rounded-t-md transition-all duration-500 min-h-[4px]"
                style={{ height: `${barH}%`, backgroundColor: color, opacity: 0.15 + (i / data.length) * 0.85 }}
              />
              <span className="text-[10px] text-surface-500 dark:text-surface-400 mt-2 truncate w-full text-center">
                {item[labelKey]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DonutChart({ data, size = 120 }) {
  const total = Object.values(data).reduce((a, b) => a + b, 0);
  const colors = ['#3b82f6', '#f59e0b', '#8b5cf6'];
  const labels = Object.keys(data);
  let cumAngle = 0;

  const segments = labels.map((label, i) => {
    const pct = total > 0 ? data[label] / total : 0;
    const startAngle = cumAngle;
    cumAngle += pct * 360;
    return { label, value: data[label], pct, startAngle, endAngle: cumAngle, color: colors[i % colors.length] };
  });

  const r = size / 2;
  const cx = r;
  const cy = r;
  const outerR = r - 2;
  const innerR = r * 0.6;

  function describeArc(startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, outerR, endAngle);
    const end = polarToCartesian(cx, cy, outerR, startAngle);
    const innerStart = polarToCartesian(cx, cy, innerR, endAngle);
    const innerEnd = polarToCartesian(cx, cy, innerR, startAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${outerR} ${outerR} 0 ${largeArc} 0 ${end.x} ${end.y} L ${innerEnd.x} ${innerEnd.y} A ${innerR} ${innerR} 0 ${largeArc} 1 ${innerStart.x} ${innerStart.y} Z`;
  }

  function polarToCartesian(cx, cy, r, angleDeg) {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) };
  }

  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((seg, i) => (
          <path
            key={i}
            d={describeArc(seg.startAngle, seg.endAngle - 0.5)}
            fill={seg.color}
            className="transition-all duration-300 hover:opacity-80"
          />
        ))}
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" className="fill-surface-900 dark:fill-white text-lg font-bold">
          {total}
        </text>
      </svg>
      <div className="flex flex-col gap-2">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-surface-600 dark:text-surface-400 capitalize">{seg.label}</span>
            <span className="font-semibold text-surface-900 dark:text-white">{seg.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}