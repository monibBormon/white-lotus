import { CheckCircle, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/shared/layout";

function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Retrieve booking details from URL or session storage
    const stored = sessionStorage.getItem("bookingDetails");
    if (stored) {
      setBookingDetails(JSON.parse(stored));
      // Clear after retrieving
      sessionStorage.removeItem("bookingDetails");
    }
  }, []);

  const sessionId = searchParams.get("session_id");

  return (
    <Layout>
      <div className="mt-20 min-h-screen bg-linear-to-br from-primary/5 via-white to-stone-50">
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle
                className="mx-auto mb-6 text-primary animate-bounce"
                size={64}
              />
              <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
                Payment Successful!
              </h1>
              <p className="text-lg text-stone-600 mb-2">
                Your booking has been confirmed.
              </p>
              {sessionId && (
                <p className="text-sm text-stone-500">
                  Session ID: {sessionId}
                </p>
              )}
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <h2 className="text-2xl font-serif text-stone-900 mb-6">
                Booking Details
              </h2>

              {bookingDetails ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-stone-600">Name:</span>
                    <span className="font-semibold text-stone-900">
                      {bookingDetails.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-stone-600">Email:</span>
                    <span className="font-semibold text-stone-900">
                      {bookingDetails.email}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-stone-600">Service:</span>
                    <span className="font-semibold text-stone-900">
                      {bookingDetails.service === "one-on-one"
                        ? "One to One Session"
                        : "Tantric Hawan Sacred Fire Ceremony"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-stone-600">Date:</span>
                    <span className="font-semibold text-stone-900">
                      {new Date(bookingDetails.date).toLocaleDateString(
                        "en-GB",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-primary">
                    <span className="text-stone-900 font-semibold">
                      Amount Paid:
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      £{bookingDetails.price}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-stone-600">
                  Your booking has been confirmed. A confirmation email has been
                  sent to your email address. Check your inbox for session
                  details and next steps.
                </p>
              )}
            </div>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-stone-900 mb-2">
                What's Next?
              </h3>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>
                  ✓ A confirmation email will be sent to{" "}
                  {bookingDetails?.email || "your email address"}
                </li>
                <li>✓ Simran will contact you to confirm the session time</li>
                <li>
                  ✓ You will receive session details before the appointment
                </li>
                <li>
                  ✓ For any questions, reach out to whitelotus750@gmail.com
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
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

export default PaymentSuccessPage;
