import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_l7ryxfq";
const TEMPLATE_ID = "template_l9vwcnq";
const PUBLIC_KEY = "ofex6kvo19mlbYbog";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Vui lòng nhập họ và tên.");
      return;
    }

    if (!form.phone.trim()) {
      alert("Vui lòng nhập số điện thoại.");
      return;
    }

    try {
      setLoading(true);

      const templateParams = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        type: "Form trang chủ",
        message: form.address.trim() || "Khách chưa nhập địa chỉ công trình",
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      alert("Gửi thông tin thành công!");

      setForm({
        name: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Gửi thất bại! Vui lòng kiểm tra lại cấu hình EmailJS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="lien-he">
      <div className="container contact-box">
        <div>
          <p className="section-label">Liên hệ tư vấn</p>
          <h2>Giải pháp phù hợp cho từng công trình</h2>
          <p>
            Để lại thông tin, đội ngũ Hưng Phú sẽ liên hệ tư vấn giải pháp thang
            máy phù hợp nhất cho bạn.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Họ và tên"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <input
            type="text"
            placeholder="Địa chỉ công trình"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Đang gửi..." : "Gửi thông tin"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;