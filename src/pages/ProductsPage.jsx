import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import familyLiftImg from "../assets/images/tech-board.jpg";
import villaLiftImg from "../assets/images/tech-panel.jpg";
import passengerLiftImg from "../assets/images/tech-hero.jpg";
import glassLiftImg from "../assets/images/tech-board.jpg";
import "../styles/products.css";

const categoryTabs = [
  { key: "gia-dinh", label: "Thang máy gia đình" },
  { key: "kinh", label: "Thang máy kính" },
  { key: "homelift", label: "Thang máy Homelift" },
];

const categoryMap = {
  "gia-dinh": {
    title: "Thang máy gia đình",
    description:
      "Giải pháp thang máy tối ưu cho nhà ở, biệt thự và công trình dân dụng với thiết kế hiện đại, vận hành êm ái và an toàn.",
  },
  kinh: {
    title: "Thang máy kính",
    description:
      "Giải pháp thang máy kính cao cấp, nâng tầm thẩm mỹ không gian và tạo điểm nhấn kiến trúc sang trọng cho công trình.",
  },
  homelift: {
    title: "Thang máy Homelift",
    description:
      "Giải pháp linh hoạt cho nhà ở hiện đại, tối ưu không gian lắp đặt, phù hợp nhà phố và công trình cải tạo.",
  },
};

const commonMaintenance = [
  "Bảo trì định kỳ 18 tháng",
  "Hỗ trợ kỹ thuật 24/7",
  "Kiểm tra an toàn và vệ sinh thiết bị định kỳ",
];

const commonWarranty = [
  "Bảo hành toàn bộ thang 18 tháng",
  "Bảo hành động cơ 10 năm",
  "Linh kiện thay thế chính hãng",
];

const products = [
  {
    id: 1,
    category: "gia-dinh",
    name: "Thang máy gia đình",
    image: familyLiftImg,
    gallery: [familyLiftImg, villaLiftImg, passengerLiftImg],
    priceFrom: "Từ 280.000.000 VNĐ",
    intro:
      "Dòng thang máy gia đình cao cấp phù hợp biệt thự và nhà phố hiện đại, tối ưu thẩm mỹ không gian sống và trải nghiệm sử dụng hàng ngày.",
    specs: [
      "Tải trọng: 350kg - 450kg",
      "Sức chứa: 4 - 6 người",
      "Tốc độ: 30 - 60 m/phút",
      "Công nghệ cáp kéo 1:1",
      "Cabin kính cường lực cao cấp",
      "Phù hợp công trình 3 - 6 tầng",
    ],
    maintenance: commonMaintenance,
    warranty: commonWarranty,
  },
  {
    id: 2,
    category: "kinh",
    name: "Thang máy kính",
    image: glassLiftImg,
    gallery: [glassLiftImg, familyLiftImg, passengerLiftImg],
    priceFrom: "Từ 420.000.000 VNĐ",
    intro:
      "Mẫu thang máy kính panorama cao cấp giúp mở rộng tầm nhìn, tăng ánh sáng tự nhiên và tạo dấu ấn kiến trúc sang trọng cho công trình.",
    specs: [
      "Tải trọng: 350kg - 800kg",
      "Thiết kế panorama sang trọng",
      "Khung kính hiện đại, thẩm mỹ cao",
      "Phù hợp biệt thự, showroom, khách sạn",
      "Cabin kính cao cấp",
      "Tăng giá trị thẩm mỹ công trình",
    ],
    maintenance: commonMaintenance,
    warranty: commonWarranty,
  },
  {
    id: 3,
    category: "homelift",
    name: "Thang máy Homelift",
    image: villaLiftImg,
    gallery: [villaLiftImg, familyLiftImg, passengerLiftImg],
    priceFrom: "Từ 345.000.000 VNĐ",
    intro:
      "Dòng homelift hiện đại phù hợp nhà phố và công trình cải tạo, tối ưu diện tích lắp đặt với thiết kế không hố PIT và không phòng máy.",
    specs: [
      "Không hố PIT",
      "Không phòng máy",
      "Lắp đặt nhanh",
      "Phù hợp nhà phố và công trình cải tạo",
      "Tiết kiệm diện tích xây dựng",
      "Vận hành an toàn, êm ái",
    ],
    maintenance: commonMaintenance,
    warranty: commonWarranty,
  },
];

function ProductsPage() {
  const navigate = useNavigate();
  const { category } = useParams();

  const currentKey = category || "gia-dinh";
  const currentCategory = categoryMap[currentKey] || categoryMap["gia-dinh"];

  const activeProduct = useMemo(() => {
    return (
      products.find((item) => item.category === currentKey) || products[0]
    );
  }, [currentKey]);

  const goToCategory = (key) => {
    navigate(`/san-pham/${key}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToContact = () => {
    navigate("/lien-he");
  };

  return (
    <>
      <Navbar />

      <main className="products-page">
        <section className="products-top-section">
          <div className="products-container">
            <div className="products-tab-row">
              {categoryTabs.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`products-tab-btn ${
                    currentKey === item.key ? "active" : ""
                  }`}
                  onClick={() => goToCategory(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="products-heading-box">
              <p className="products-kicker">Danh mục sản phẩm</p>
              <h1>{currentCategory.title}</h1>
              <p>{currentCategory.description}</p>
            </div>
          </div>
        </section>

        {activeProduct && (
          <section className="product-info-section">
            <div className="products-container">
              <div className="product-info-card">
                <p className="product-highlight-label">Sản phẩm nổi bật</p>
                <p className="product-highlight-intro">{activeProduct.intro}</p>

                <div className="product-price-box">
                  <span>Giá chỉ từ</span>
                  <strong>{activeProduct.priceFrom}</strong>
                </div>

                <div className="product-info-grid">
                  <div className="product-detail-block">
                    <h3>Thông số kỹ thuật</h3>
                    <ul>
                      {activeProduct.specs.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-policy-card">
                    <h3>Chính sách bảo trì</h3>
                    <ul>
                      {activeProduct.maintenance.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-policy-card">
                    <h3>Chính sách bảo hành</h3>
                    <ul>
                      {activeProduct.warranty.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="product-gallery-wrapper">
                  <div className="product-gallery-header">
                    <p className="gallery-label">Hình ảnh nổi bật</p>
                    <h3>Một số mẫu {currentCategory.title.toLowerCase()}</h3>
                  </div>

                  <div className="product-gallery-grid">
                    {activeProduct.gallery.map((img, index) => (
                      <div className="product-gallery-item" key={index}>
                        <img
                          src={img}
                          alt={`${currentCategory.title} ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="product-action-row">
                  <button
                    type="button"
                    className="product-quote-btn"
                    onClick={goToContact}
                  >
                    Yêu cầu báo giá
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ProductsPage;