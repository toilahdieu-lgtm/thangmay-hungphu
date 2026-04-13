import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import techHero from "../assets/images/tech-hero.jpg";
import techPanel from "../assets/images/tech-panel.jpg";
import techBoard from "../assets/images/tech-board.jpg";

function TechnicalPage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/lien-he");
  };

  return (
    <div className="technical-page">
      <Navbar />

      <section className="technical-hero">
        <img src={techHero} alt="Kỹ thuật thang máy" />
        <div className="technical-hero-overlay">
          <div className="container">
            <div className="technical-hero-text">
              <p>KỸ THUẬT XUẤT SẮC</p>
              <h1>
                Ma trận
                <br />
                <span>Chính xác</span>
                <br />
                Theo chiều dọc.
              </h1>
              <p>
                Hệ thống vận tải đứng tiên tiến, thiết kế cho sự vận hành chính
                xác, hiệu suất an toàn và tuổi thọ vận hành lâu dài.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-cert">
        <div className="container technical-cert-grid">
          <div className="technical-cert-left">
            <h2>Tuân thủ &amp; Chứng nhận</h2>
            <p>
              Giải pháp kỹ thuật của chúng tôi tuân thủ tiêu chuẩn nghiêm ngặt,
              giúp công trình vận hành ổn định và bền vững.
            </p>

            <div className="technical-cert-box">
              <strong>ISO 9001:2015</strong>
              <span>Hệ thống quản lý chất lượng</span>
            </div>

            <div className="technical-cert-box">
              <strong>TCVN / QCVN</strong>
              <span>Tiêu chuẩn an toàn dân dụng</span>
            </div>
          </div>

          <div className="technical-cert-image">
            <img src={techPanel} alt="Kỹ thuật viên kiểm tra hệ thống" />
          </div>

          <div className="technical-cert-right">
            <div className="technical-rate">99.9%</div>
            <p>Giảm nguy cơ lỗi nhờ quy trình kiểm tra và giám sát nghiêm ngặt.</p>
          </div>
        </div>
      </section>

      <section className="technical-spec">
        <div className="container">
          <h2>Thông số Kỹ thuật</h2>
          <p className="technical-subtitle">Ma trận so sánh các dòng máy</p>

          <div className="technical-table-wrap">
            <table className="technical-table">
              <thead>
                <tr>
                  <th>Thông số</th>
                  <th>HP Prime Gia đình</th>
                  <th>HP Titan Thương mại</th>
                  <th>HP Zenith Cao tầng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tải trọng</td>
                  <td>320kg - 450kg</td>
                  <td>800kg - 1000kg</td>
                  <td>1000kg - 2500kg</td>
                </tr>
                <tr>
                  <td>Tốc độ định mức</td>
                  <td>0.4m/s - 1.0m/s</td>
                  <td>1.0m/s - 2.5m/s</td>
                  <td>2.5m/s - 6.0m/s</td>
                </tr>
                <tr>
                  <td>Hệ thống truyền động</td>
                  <td>VVVF không hộp số</td>
                  <td>PMSM đồng bộ</td>
                  <td>Điều khiển thông minh</td>
                </tr>
                <tr>
                  <td>Hành trình tối đa</td>
                  <td>30 mét</td>
                  <td>80 mét</td>
                  <td>250+ mét</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="technical-safety">
        <div className="container">
          <h2 className="technical-center-title">An toàn tuyệt đối</h2>

          <div className="technical-safety-grid">
            <div className="technical-safety-card light">
              <h3>Bộ hãm an toàn chậm dần</h3>
              <p>
                Hệ thống kiểm soát lực và cơ chế dừng khẩn cấp giúp bảo vệ tối
                ưu khi xuất hiện tình huống bất thường.
              </p>
              <div className="technical-small-text">TỐC ĐỘ PHẢN HỒI &lt; 0.15s</div>
            </div>

            <div className="technical-safety-card image-card">
              <img src={techBoard} alt="Bo mạch điều khiển" />
            </div>

            <div className="technical-safety-card gold">
              <h3>Giảm thiểu RMP</h3>
              <p>
                Tăng độ ổn định chuyển động, hạn chế rung lắc và nâng cao trải
                nghiệm sử dụng.
              </p>
            </div>

            <div className="technical-safety-card dark">
              <h3>Bảo vệ UCMP</h3>
              <p>
                Hệ thống khóa chuyển động ngoài ý muốn, giữ cabin vận hành đúng
                vị trí và ổn định.
              </p>
            </div>

            <div className="technical-safety-card light">
              <h3>Mạng thả hồng ngoại</h3>
              <p>
                Ma trận tia hồng ngoại đa vùng phát hiện vật cản liên tục, tăng
                mức an toàn cho người dùng.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-highlight">
        <div className="container technical-highlight-box">
          <div className="technical-highlight-left">
            <h2>
              Hệ thống Thu hồi
              <br />
              Năng lượng Xanh
            </h2>
            <p>
              Tái tạo năng lượng động cơ trong quá trình vận hành, giúp giảm tiêu
              thụ điện và tối ưu hiệu quả sử dụng lâu dài.
            </p>

            <div className="technical-metrics">
              <div>
                <strong>A++</strong>
                <span>Hiệu suất năng lượng</span>
              </div>
              <div>
                <strong>-40%</strong>
                <span>Giảm điện năng tiêu thụ</span>
              </div>
            </div>

            <button>Tải báo cáo phát triển bền vững</button>
          </div>

          <div className="technical-highlight-right"></div>
        </div>
      </section>

      <section className="technical-cta">
        <div className="container technical-cta-box">
          <div className="technical-cta-icon">✦</div>
          <h2>Hợp tác cùng Sự chính xác</h2>
          <p>
            Từ thiết kế khởi tạo kỹ thuật đến vận hành, Hưng Phú cung cấp giải
            pháp phù hợp cho từng công trình.
          </p>

          <div className="technical-cta-actions">
            <button className="dark-btn" onClick={goToContact}>
              Tư vấn cùng kỹ sư
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TechnicalPage;