
const Icon = ({ d, size = 16, stroke = 'currentColor', fill = 'none', strokeWidth = 1.75 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
)

export const Icons = {
  Github:        () => <Icon d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />,
  Zap:           () => <Icon d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  Shield:        () => <Icon d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  Target:        () => <Icon d={["M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z", "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z", "M12 12h.01"]} />,
  AlertTriangle: () => <Icon d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />,
  CheckCircle:   () => <Icon d={["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4 12 14.01l-3-3"]} />,
  Eye:           () => <Icon d={["M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"]} />,
  GitBranch:     () => <Icon d={["M6 3v12", "M18 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z", "M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z", "M6 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6z", "M18 12H6"]} />,
  Cpu:           () => <Icon d={["M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12z", "M9 9h6v6H9z", "M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2"]} />,
  Activity:      () => <Icon d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  Lock:          () => <Icon d={["M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z", "M7 11V7a5 5 0 0 1 10 0v4"]} />,
  ArrowRight:    () => <Icon d="M5 12h14M12 5l7 7-7 7" />,
  Sparkles:      () => <Icon d={["M12 3l1.88 5.76L19.5 9l-5.76 1.88L13.5 17l-1.88-5.76L6 9.12l5.76-1.88z", "M5 2l.94 2.88 2.88.94-2.88.94L5 9.5l-.94-2.88L1.5 5.76l2.88-.94z", "M19 14l.94 2.88 2.88.94-2.88.94L19 21.5l-.94-2.88-2.88-.94 2.88-.94z"]} />,
  Code:          () => <Icon d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  BarChart:      () => <Icon d={["M12 20V10", "M18 20V4", "M6 20v-4"]} />,
  Check:         () => <Icon d="M20 6 9 17l-5-5" />,
  ChevronRight:  () => <Icon d="M9 18l6-6-6-6" />,
  Layers:        () => <Icon d={["M12 2 2 7l10 5 10-5-10-5z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"]} />,
  Search:        () => <Icon d={["M11 17A6 6 0 1 0 11 5a6 6 0 0 0 0 12z", "M21 21l-4.35-4.35"]} />,
  Star:          (p) => <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={p?.filled ? 'currentColor' : 'none'} />,
}
