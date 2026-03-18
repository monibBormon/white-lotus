import { Home, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/layout";

function PaymentCancelPage() {
  return (
    <Layout>
      <div className="mt-20 min-h-screen bg-linear-to-br from-primary/5 via-white to-stone-50">
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <XCircle className="mx-auto mb-6 text-rose-600" size={64} />
              <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
                Payment Cancelled
              </h1>
              <p className="text-lg text-stone-600">
                Your booking was not completed. No charge has been made to your
                account.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <div className="text-center space-y-4">
                <p className="text-stone-600">
                  If you encountered any issues or have questions, please reach
                  out to us:
                </p>
                <div className="space-y-2">
                  <p className="text-stone-700">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:whitelotus750@gmail.com"
                      className="text-primary hover:underline"
                    >
                      whitelotus750@gmail.com
                    </a>
                  </p>
                  <p className="text-stone-700">
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+447361149725"
                      className="text-primary hover:underline"
                    >
                      +44 7361 149725
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Try Again
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-stone-200 hover:bg-stone-300 text-stone-900 font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                <Home size={20} />
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default PaymentCancelPage;
