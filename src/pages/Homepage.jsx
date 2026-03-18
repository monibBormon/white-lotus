import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Layout from "../components/shared/layout";

function HomePage() {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />
      </div>
    </Layout>
  );
}

export default HomePage;
