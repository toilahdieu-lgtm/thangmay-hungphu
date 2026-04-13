import "../styles/floating-contact.css";

function FloatingContact() {
  const phone = "0767188666";
  const zalo = "0767188666";
  const facebook = "https://www.facebook.com/share/1aPhpBi4Dr/?mibextid=wwXIfr"; // 🔥 sửa link page của bạn

  return (
    <div className="floating-contact">

      {/* FACEBOOK */}
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn facebook"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
        />
      </a>

      {/* ZALO */}
      <a
        href={`https://zalo.me/${zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn zalo"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Zalo"
        />
      </a>

      {/* HOTLINE */}
      <a href={`tel:${phone}`} className="floating-btn phone">
        📞
      </a>
    </div>
  );
}

export default FloatingContact;