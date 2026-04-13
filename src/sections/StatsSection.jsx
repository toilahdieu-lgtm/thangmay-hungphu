function StatsSection() {
  const stats = [
    { number: "500+", label: "Công trình hoàn thiện" },
    { number: "15+", label: "Năm kinh nghiệm" },
    { number: "24/7", label: "Hỗ trợ kỹ thuật" },
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;