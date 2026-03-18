import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <Header />
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
