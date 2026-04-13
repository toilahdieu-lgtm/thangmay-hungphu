import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import AboutSection from "../sections/AboutSection";
import WhyChooseSection from "../sections/WhyChooseSection";
import ContactSection from "../sections/ContactSection";

function HomePage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/lien-he");
  };

  const goToProducts = () => {
    navigate("/san-pham");
  };

  return (
    <div className="page">
      <Navbar />

      <HeroSection
        onExploreClick={goToProducts}
        onConsultClick={goToContact}
      />
      <StatsSection />
      <AboutSection />
      <WhyChooseSection />
      <ContactSection onConsultClick={goToContact} />

      <Footer />
    </div>
  );
}

export default HomePage;