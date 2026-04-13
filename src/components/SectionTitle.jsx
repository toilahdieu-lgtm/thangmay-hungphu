function SectionTitle({ label, title, desc, center = false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      {label && <p className="section-label">{label}</p>}
      {title && <h2>{title}</h2>}
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

export default SectionTitle;