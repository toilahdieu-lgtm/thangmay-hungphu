import SectionTitle from "../components/SectionTitle";

function WhyChooseSection() {
  const items = [
    {
      title: "An toàn tuyệt đối",
      desc: "Tuân thủ quy chuẩn kỹ thuật, tối ưu hệ thống vận hành và bảo vệ người dùng.",
    },
    {
      title: "Thiết kế tinh tế",
      desc: "Phù hợp nhiều không gian sống, từ nhà phố đến biệt thự cao cấp.",
    },
    {
      title: "Dịch vụ nhanh chóng",
      desc: "Đội ngũ kỹ thuật phản hồi nhanh, hỗ trợ kiểm tra và bảo trì định kỳ.",
    },
  ];

  return (
    <section className="why-choose" id="ly-do">
      <div className="container">
        <SectionTitle
          label="Giá trị cốt lõi"
          title="Lý do khách hàng tin tưởng"
          desc="Không chỉ là sản phẩm, chúng tôi mang đến giải pháp đồng hành lâu dài."
          center
        />

        <div className="why-grid">
          {items.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">◆</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;