import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import BookNowPage from "./pages/BookNowPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/Homepage";
import PaymentCancelPage from "./pages/PaymentCancelPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import ProductsPage from "./pages/ProductsPage";
import QualificationsPage from "./pages/QualificationsPage";
import TestimonialAdmin from "./pages/TestimonialAdmin";
import TestimonialsPage from "./pages/TestimonialsPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qualifications" element={<QualificationsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-now" element={<BookNowPage />} />
        <Route path="/success" element={<PaymentSuccessPage />} />
        <Route path="/cancel" element={<PaymentCancelPage />} />
        <Route path="/admin/v1/testimonials" element={<TestimonialAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
