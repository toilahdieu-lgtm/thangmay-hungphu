import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Headphones } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactMap from "../assets/images/contact-map.jpg";

const SERVICE_ID = "service_o1xi76e";
const TEMPLATE_ID = "template_zlbcs6q";
const PUBLIC_KEY = "NG4AprR4zTkQ1Gp5h";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "Cải tạo",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTypeSelect = (type) => {
    setForm((prev) => ({
      ...prev,
      type,
    }));
  };

  const validateForm = () => {
    // ❌ KHÔNG check tên nữa

    if (!form.phone.trim()) {
      alert("Vui lòng nhập số điện thoại.");
      return false;
    }

    if (!/^[0-9+()\s.-]{8,20}$/.test(form.phone.trim())) {
      alert("Số điện thoại không hợp lệ.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      const templateParams = {
        name: form.name.trim() || "Khách hàng",
        phone: form.phone.trim(),
        type: form.type,
        message:
          form.message?.trim() ||
          `Khách yêu cầu tư vấn - Loại dự án: ${form.type}`,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      alert("Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");

      setForm({
        name: "",
        phone: "",
        type: "Cải tạo",
        message: "",
      });
    } catch (error) {
      const errorMessage =
        error?.text ||
        error?.message ||
        "Gửi yêu cầu thất bại. Vui lòng thử lại sau.";

      alert(`Gửi yêu cầu thất bại: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-hero-page">
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-hero-left">
              <p className="contact-page-label">TƯ VẤN & DỰ TOÁN</p>

              <h1 className="contact-hero-title">
                <span>Kỹ thuật chính xác</span>
                <span>cho không gian</span>
                <span>của bạn.</span>
              </h1>
            </div>

            <div className="contact-hero-right">
              <p>
                Cung cấp thông số dự án của bạn bên dưới, đội ngũ kỹ sư của
                chúng tôi sẽ xây dựng giải pháp phù hợp với công trình của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <MapPin size={24} strokeWidth={1.8} />
                </div>
                <h3>Trụ sở công ty</h3>
                <p>
                  Tòa nhà Ban Cơ yếu Chính phủ
                  <br />
                  43 Lê Văn Lương, Thanh Xuân
                  <br />
                  Hà Nội
                </p>
              </div>

              <div className="contact-info-card gray">
                <div className="contact-icon orange">
                  <Headphones size={24} strokeWidth={1.8} />
                </div>
                <h3>Hỗ trợ kỹ thuật</h3>
                <p>📞 0767188666</p>
                <p>✉ hungphuelevator@gmail.com</p>
              </div>

              <div className="contact-map-card">
                <img src={contactMap} alt="Bản đồ liên hệ" />
              </div>
            </div>

            <div className="contact-form-card">
              <form className="contact-form-page" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>Họ và tên (không bắt buộc)</label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>

                  <div className="contact-field">
                    <label>Số điện thoại *</label>
                    <input
                      type="text"
                      placeholder="+84 000 000 000"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label>Loại dự án</label>
                  <div className="contact-type-grid">
                    <button
                      type="button"
                      className={form.type === "Cải tạo" ? "nav-active-btn" : ""}
                      onClick={() => handleTypeSelect("Cải tạo")}
                    >
                      Cải tạo
                    </button>

                    <button
                      type="button"
                      className={form.type === "Xây mới" ? "nav-active-btn" : ""}
                      onClick={() => handleTypeSelect("Xây mới")}
                    >
                      Xây mới
                    </button>
                  </div>
                </div>

                <div className="contact-form-bottom">
                  <div className="contact-note">◌ GỬI YÊU CẦU BẢO MẬT</div>
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={loading}
                  >
                    {loading ? "ĐANG GỬI..." : "GỬI YÊU CẦU →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;