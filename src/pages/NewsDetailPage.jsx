import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsPosts } from "../data/newsData";
import "../styles/news-detail.css";

function NewsDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const post = useMemo(() => {
    return newsPosts.find((item) => item.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    return newsPosts.filter((item) => item.slug !== slug).slice(0, 3);
  }, [slug]);

  if (!post) {
    return (
      <div className="news-detail-page">
        <Navbar />
        <main className="news-detail-notfound">
          <div className="container">
            <h1>Không tìm thấy bài viết</h1>
            <p>
              Bài viết bạn đang tìm có thể đã được thay đổi hoặc không còn tồn tại.
            </p>
            <button
              className="news-back-btn"
              type="button"
              onClick={() => navigate("/tin-tuc")}
            >
              Quay lại trang tin tức
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <Navbar />

      <main className="news-detail-main-page">
        <section className="news-detail-top">
          <div className="container">
            <button
              className="news-back-btn"
              type="button"
              onClick={() => navigate("/tin-tuc")}
            >
              ← Quay lại tin tức
            </button>

            <div className="news-detail-header">
              <span className="news-detail-category">{post.category}</span>
              <h1>{post.title}</h1>
              <p className="news-detail-date">{post.date}</p>
              <p className="news-detail-summary">{post.summary}</p>
            </div>
          </div>
        </section>

        <section className="news-detail-body">
          <div className="container news-detail-layout">
            <article className="news-detail-article">
              <div className="news-detail-image-wrap">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="news-detail-content">
                {post.content.map((section, index) => (
                  <section className="news-detail-section" key={index}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>
            </article>

            <aside className="news-detail-sidebar">
              <div className="news-detail-sidebox">
                <h3>Bài viết liên quan</h3>

                <div className="news-related-list">
                  {relatedPosts.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="news-related-item"
                      onClick={() => navigate(`/tin-tuc/${item.slug}`)}
                    >
                      <img src={item.image} alt={item.title} />
                      <div className="news-related-text">
                        <span>{item.category}</span>
                        <h4>{item.title}</h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="news-detail-sidebox dark">
                <h3>Cần tư vấn giải pháp?</h3>
                <p>
                  Liên hệ Hưng Phú để được tư vấn giải pháp thang máy phù hợp với
                  công trình của bạn.
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/lien-he")}
                >
                  Liên hệ ngay
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NewsDetailPage;