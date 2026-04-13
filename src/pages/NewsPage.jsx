import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import newsHero from "../assets/images/news-hero.jpg";
import news1 from "../assets/images/news-1.jpg";
import news2 from "../assets/images/news-2.jpg";
import news3 from "../assets/images/news-3.jpg";

function NewsPage() {
  const navigate = useNavigate();

  const featuredPosts = [
    {
      slug: "xu-huong-thang-may-thong-minh-trong-nha-o-hien-dai",
      image: news1,
      category: "Tin công nghệ",
      title: "Xu hướng thang máy thông minh trong nhà ở hiện đại",
      desc: "Các giải pháp điều khiển thông minh, tiết kiệm điện và tối ưu trải nghiệm người dùng.",
    },
    {
      slug: "giai-phap-thang-may-cho-nha-pho-dien-tich-nho",
      image: news2,
      category: "Dự án",
      title: "Giải pháp thang máy cho nhà phố diện tích nhỏ",
      desc: "Tối ưu thiết kế cabin, hố thang và lối đi để phù hợp không gian đô thị.",
    },
    {
      slug: "5-dau-hieu-cho-thay-he-thong-thang-may-can-kiem-tra-som",
      image: news3,
      category: "Bảo trì",
      title: "5 dấu hiệu cho thấy hệ thống thang máy cần kiểm tra sớm",
      desc: "Nhận biết sớm các rủi ro kỹ thuật để đảm bảo an toàn và hiệu suất vận hành.",
    },
  ];

  const latestPosts = [
    {
      slug: "khi-nao-nen-nang-cap-tu-dieu-khien-thang-may",
      title: "Khi nào nên nâng cấp tủ điều khiển thang máy?",
    },
    {
      slug: "loi-ich-cua-bao-tri-dinh-ky-theo-chuan-ky-thuat",
      title: "Lợi ích của bảo trì định kỳ theo chuẩn kỹ thuật",
    },
    {
      slug: "cach-chon-tai-trong-thang-may-phu-hop-cho-cong-trinh",
      title: "Cách chọn tải trọng thang máy phù hợp cho công trình",
    },
    {
      slug: "nhung-tieu-chuan-an-toan-quan-trong-trong-lap-dat",
      title: "Những tiêu chuẩn an toàn quan trọng trong lắp đặt",
    },
  ];

  const goToPost = (slug) => {
    navigate(`/tin-tuc/${slug}`);
  };

  return (
    <div className="news-page">
      <Navbar />

      <section className="news-hero">
        <img src={newsHero} alt="Tin tức Hưng Phú" />
        <div className="news-hero-overlay">
          <div className="container">
            <div className="news-hero-text">
              <p>TIN TỨC & CHIA SẺ</p>
              <h1>Thông tin mới nhất về công nghệ và giải pháp thang máy</h1>
              <p>
                Cập nhật xu hướng, kỹ thuật, kinh nghiệm vận hành và những giải
                pháp tối ưu cho từng công trình.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="news-featured">
        <div className="container">
          <h2>Bài viết nổi bật</h2>

          <div className="news-featured-grid">
            {featuredPosts.map((item, index) => (
              <article className="news-card" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="news-card-content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button type="button" onClick={() => goToPost(item.slug)}>
                    Đọc thêm
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-layout">
        <div className="container news-layout-grid">
          <div className="news-main-list">
            <h2>Bài viết mới</h2>

            {latestPosts.map((item, index) => (
              <div className="news-list-item" key={index}>
                <div>
                  <span>Tin tức chuyên ngành</span>
                  <h3>{item.title}</h3>
                  <p>
                    Nội dung được biên soạn ngắn gọn, tập trung vào giá trị thực
                    tiễn cho vận hành và ứng dụng.
                  </p>
                </div>

                <button type="button" onClick={() => goToPost(item.slug)}>
                  Xem
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NewsPage;