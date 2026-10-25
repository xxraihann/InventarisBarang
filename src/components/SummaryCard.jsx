export default function SummaryCard({ label, value, detail, icon, tone }) {
  return <article className="summary-card"><div className={`summary-icon ${tone}`}>{icon}</div><div className="summary-label">{label}</div><div className="summary-value">{value}</div><div className="summary-detail">{detail}</div></article>;
}
