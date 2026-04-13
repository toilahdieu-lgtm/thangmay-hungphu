import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleGoProducts = () => {
    navigate("/san-pham");
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Hưng Phú" />
          <span>Hưng Phú Elevator</span>
        </Link>

        <nav className="navbar-menu desktop-menu">
          <NavLink to="/">Giới thiệu</NavLink>
          <NavLink to="/dich-vu">Dịch vụ</NavLink>
          <NavLink to="/san-pham">Sản phẩm</NavLink>
          <NavLink to="/ky-thuat">Kỹ thuật</NavLink>
          <NavLink to="/tin-tuc">Tin tức</NavLink>
          <NavLink to="/lien-he" className="nav-contact-btn">
            Liên hệ
          </NavLink>
        </nav>

        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Mở menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav-overlay ${menuOpen ? "show" : ""}`}>
        <div className="mobile-nav-panel">
          <div className="mobile-nav-links">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Giới thiệu
            </NavLink>

            <NavLink to="/dich-vu" onClick={() => setMenuOpen(false)}>
              Dịch vụ
            </NavLink>

            <button
              type="button"
              className="mobile-nav-link-button"
              onClick={handleGoProducts}
            >
              Sản phẩm
            </button>

            <NavLink to="/ky-thuat" onClick={() => setMenuOpen(false)}>
              Kỹ thuật
            </NavLink>

            <NavLink to="/tin-tuc" onClick={() => setMenuOpen(false)}>
              Tin tức
            </NavLink>

            <NavLink
              to="/lien-he"
              className="mobile-contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              Liên hệ
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;