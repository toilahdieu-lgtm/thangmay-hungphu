import heroImage from "../assets/images/hero-elevator.jpg";

function HeroSection({ onConsultClick, onExploreClick }) {
  return (
    <section className="hero">
      <img src={heroImage} alt="Thang máy Hưng Phú" className="hero-bg" />

      <div className="hero-overlay">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-tag">Thang máy Hưng Phú</p>

            <h1>
              Nâng Tầm
              <br />
              Không Gian
              <br />
              Sống
            </h1>

            <p>
              Giải pháp thang máy hiện đại, an toàn và tinh tế cho công trình
              dân dụng và thương mại.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={onExploreClick}>
                Khám phá
              </button>

              <button className="btn-outline" onClick={onConsultClick}>
                Tư vấn ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;