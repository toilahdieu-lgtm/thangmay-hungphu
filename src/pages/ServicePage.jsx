import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import serviceHero from "../assets/images/service-hero.jpg";
import serviceLift from "../assets/images/service-lift.jpg";
import spareParts from "../assets/images/spare-parts.jpg";

function ServicePage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/lien-he");
  };

  const openZaloSupport = () => {
    window.open("https://zalo.me/0123456789", "_blank");
  };

  return (
    <div className="service-page">
      <Navbar />

      <section className="service-hero">
        <img src={serviceHero} alt="Kỹ thuật thang máy" />
        <div className="service-hero-overlay">
          <div className="container">
            <div className="service-hero-text">
              <p>DỊCH VỤ KỸ THUẬT CHÍNH XÁC</p>
              <h1>
                Sự Chính Xác
                <br />
                Kiến Trúc Trong
                <br />
                <span>Chuyển Động.</span>
              </h1>
              <p className="service-hero-desc">
                Giải pháp thang máy toàn diện được thiết kế tối ưu cho an toàn,
                tốc độ và độ tin cậy tuyệt đối. Từ bảo trì kỹ thuật đến hậu mãi
                trọn đời.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-features" id="dich-vu">
        <div className="container service-feature-grid">
          <div className="service-feature-card light">
            <h2>Lắp Đặt</h2>
            <p>
              Dịch vụ lắp đặt chuyên nghiệp từ đội ngũ kỹ sư nhiều kinh nghiệm.
              Đảm bảo công trình đạt tiêu chuẩn kỹ thuật và độ chính xác cao.
            </p>

            <ul>
              <li>Tư vấn hệ thống kỹ thuật</li>
              <li>Thi công an toàn tiêu chuẩn cao</li>
              <li>Tối ưu diện tích không gian lắp đặt</li>
            </ul>
          </div>

          <div className="service-feature-image">
            <img src={serviceLift} alt="Lắp đặt thang máy" />
          </div>

          <div className="service-feature-card dark">
            <div className="service-badge">DỊCH VỤ BẢO TRÌ CAO CẤP</div>
            <h2>Bảo trì 24/7</h2>
            <p>
              Chương trình giám sát liên tục và bảo trì theo lịch trình giúp hệ
              thống hoạt động ổn định, đảm bảo hiệu quả vận hành và an toàn mọi
              lúc.
            </p>

            <div className="service-time">15 phút</div>
            <small>THỜI GIAN PHẢN HỒI</small>

            <button onClick={openZaloSupport}>Hỗ Trợ Khẩn Cấp</button>
          </div>
        </div>
      </section>

      <section className="service-parts">
        <div className="container service-parts-grid">
          <div className="service-parts-image">
            <img src={spareParts} alt="Linh kiện chính hãng" />
          </div>

          <div className="service-parts-content">
            <h2>Linh kiện chính hãng</h2>
            <p>
              Chúng tôi chỉ sử dụng phụ tùng đạt tiêu chuẩn OEM, đảm bảo độ bền,
              độ ổn định và tính tương thích cao cho hệ thống thang máy.
            </p>

            <div className="service-parts-boxes">
              <div>
                <strong>Chứng nhận ISO</strong>
                <p>Linh kiện đạt tiêu chuẩn quốc tế</p>
              </div>

              <div>
                <strong>Cung ứng trực tiếp</strong>
                <p>Đồng bộ cùng hệ vận hành</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-standards" id="ky-thuat">
        <div className="container">
          <h2>Tiêu Chuẩn Kỹ Thuật</h2>
          <p className="service-standard-desc">
            Mọi hoạt động đều được triển khai theo quy trình và tiêu chuẩn rõ
            ràng.
          </p>

          <div className="service-standards-grid">
            <div className="standard-item">
              <span>PHẢN HỒI</span>
              <h3>24/7/365</h3>
              <p>Hỗ trợ liên tục, bảo trì không ngắt quãng</p>
            </div>

            <div className="standard-item">
              <span>CHỨNG NHẬN</span>
              <h3>ISO 9001</h3>
              <p>Quản lý chất lượng kỹ thuật nhất quán</p>
            </div>

            <div className="standard-item">
              <span>KỸ THUẬT VIÊN</span>
              <h3>Cấp độ C3</h3>
              <p>Đội ngũ được đào tạo chuyên sâu</p>
            </div>

            <div className="standard-item">
              <span>PHỦ SÓNG</span>
              <h3>Toàn quốc</h3>
              <p>Mạng lưới vận hành tại nhiều khu vực</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container service-cta-box">
          <div className="service-cta-left">
            <h2>
              Cần hỗ trợ chuyên môn cho
              <br />
              tòa nhà của bạn?
            </h2>
            <p>
              Các chuyên gia kỹ thuật của chúng tôi sẵn sàng khảo sát, tư vấn và
              đưa ra phương án phù hợp với nhu cầu vận hành của bạn.
            </p>

            <div className="service-cta-actions">
              <button className="orange-btn" onClick={goToContact}>
                Yêu cầu tư vấn
              </button>
            </div>
          </div>

          <div className="service-cta-right"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicePage;