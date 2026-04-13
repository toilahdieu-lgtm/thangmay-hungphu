import SectionTitle from "../components/SectionTitle";
import machineRoom from "../assets/images/machine-room.jpg";

function AboutSection() {
  return (
    <section className="about" id="gioi-thieu">
      <div className="container about-grid">
        <div className="about-text">
          <SectionTitle
            label="Về chúng tôi"
            title="Kỹ nghệ chính xác trong chuyển động"
            desc="Hưng Phú mang đến các giải pháp thang máy tối ưu về thẩm mỹ, độ bền và an toàn cho mọi công trình."
          />

          <p>
            Chúng tôi tập trung vào chất lượng lắp đặt, trải nghiệm người dùng
            và dịch vụ hậu mãi, giúp khách hàng yên tâm trong suốt quá trình sử
            dụng.
          </p>
        </div>

        <div className="about-image-card">
          <img src={machineRoom} alt="Động cơ thang máy" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;