import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import familyLiftImg from "../assets/images/tech-board.jpg";
import glassLiftImg from "../assets/images/tech-panel.jpg";
import homeliftImg from "../assets/images/tech-hero.jpg";
import "../styles/products-menu.css";

function ProductsMenuPage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Thang máy gia đình",
      image: familyLiftImg,
      path: "/san-pham/gia-dinh",
    },
    {
      title: "Thang máy kính",
      image: glassLiftImg,
      path: "/san-pham/kinh",
    },
    {
      title: "Thang máy Homelift",
      image: homeliftImg,
      path: "/san-pham/homelift",
    },
  ];

  return (
    <div className="products-menu-page">
      <Navbar />

      <main className="products-menu-main">
        <div className="container">
          <div className="products-menu-head">
            <h1>Danh mục sản phẩm</h1>
            <p>Cam kết sử dụng 100% vật liệu chất lượng!</p>
          </div>

          <div className="products-menu-grid three-items">
            {categories.map((item) => (
              <button
                key={item.title}
                type="button"
                className="products-menu-card"
                onClick={() => navigate(item.path)}
              >
                <div className="products-menu-card-title">{item.title}</div>
                <img src={item.image} alt={item.title} />
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductsMenuPage;