import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsMenuPage from "./pages/ProductsMenuPage";
import TechnicalPage from "./pages/TechnicalPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import ContactPage from "./pages/ContactPage";

// 👇 IMPORT thêm cái này
import FloatingContact from "./components/FloatingContact";

function InitialMobileRedirect() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const hasRedirected =
      sessionStorage.getItem("mobile_products_landing_shown") === "true";

    if (isMobile && !hasRedirected) {
      sessionStorage.setItem("mobile_products_landing_shown", "true");
      navigate("/san-pham", { replace: true });
      return;
    }

    setReady(true);
  }, [navigate]);

  if (!ready) return null;

  return <HomePage />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InitialMobileRedirect />} />
      <Route path="/dich-vu" element={<ServicePage />} />
      <Route path="/san-pham" element={<ProductsMenuPage />} />
      <Route path="/san-pham/:category" element={<ProductsPage />} />
      <Route path="/ky-thuat" element={<TechnicalPage />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
      <Route path="/lien-he" element={<ContactPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />

      {/* 👇 NÚT ZALO + HOTLINE */}
      <FloatingContact />
    </BrowserRouter>
  );
}

export default App;