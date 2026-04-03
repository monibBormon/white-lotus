import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/layout";

function ContactPage() {
  return (
    <Layout>
      <div className="mt-20 min-h-screen bg-linear-to-br from-primary/5 via-white to-stone-50">
        {/* Services Information Section */}
        <section className="py-20 max-w-4xl mx-auto px-6 text-center">
          <div>
            <p className="text-lg font-semibold text-stone-600 mb-6 leading-relaxed">
              We are dedicated to providing exceptional spiritual healing
              services tailored to your needs. Discover your healing journey
              designed to promote your well-being and inner harmony.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Get in touch if you have any questions or to schedule a healing
              session.
            </p>
            <div className="text-stone-700 mb-8">
              <p className="mb-2">
                The energy exchange for healing sessions is <span className="font-bold">£80 <del className="text-gray-500">£150</del></span> an hour.
              </p>
              <p className="mb-2">Tantric Hawan sacred fire ceremony <span className="font-bold">£100 <del className="text-gray-500">£200</del></span>.</p>
              <p>Services are available globally.</p>
            </div>
            <Link
              to="/book-now"
              className="inline-block bg-primary hover:bg-pink-400 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book Now
            </Link>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {/* Phone */}
            <div className="bg-white/70 p-8 rounded-2xl shadow-sm border border-stone-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-stone-900">Phone</h3>
              <a
                href="tel:+447361149725"
                className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
              >
                +44 7361149725
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/70 p-8 rounded-2xl shadow-sm border border-stone-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-stone-900">Email</h3>
              <a
                href="mailto:whitelotus750@gmail.com"
                className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
              >
                whitelotus750@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/70 p-8 rounded-2xl shadow-sm border border-stone-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-stone-900">
                Location
              </h3>
              <p className="text-lg text-primary font-medium">
                Leicester, England
                <br />
                United Kingdom
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;
