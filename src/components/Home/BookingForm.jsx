import { useMemo, useState } from "react";

const SERVICES = [
  { value: "one-on-one", label: "One to One Session" },
  { value: "tantric-hawan", label: "Tantric Hawan Sacred Fire Ceremony" },
];

function BookingForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    service: "one-on-one",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const servicePrice = values.service === "one-on-one" ? 80 : 100;

  const isValid = useMemo(() => {
    return /\S+@\S+\.\S+/.test(values.email.trim());
  }, [values.email]);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!values.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!isValid) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!values.date.trim()) {
      setError("Please select a preferred date.");
      return;
    }

    setError(null);
    setStatus("sending");

    try {
      // Store booking details for success page
      const bookingData = {
        name: values.name,
        email: values.email,
        service: values.service,
        date: values.date,
        message: values.message,
        price: servicePrice,
      };
      sessionStorage.setItem("bookingDetails", JSON.stringify(bookingData));

      // Create a checkout session and redirect to Stripe
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      const { sessionUrl } = await response.json();

      if (sessionUrl) {
        window.location.href = sessionUrl;
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <section
      id="book"
      className="py-20 px-6 bg-gradient-to-b from-white via-primary/5 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-center">
          <h3 className="text-3xl font-serif text-stone-900">Book a session</h3>
          <p className="text-stone-600">
            Submit your booking request and we’ll follow up with next steps and
            available times.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-6 rounded-3xl bg-white/60 p-8 shadow-xl ring-1 ring-stone-200 backdrop-blur-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">Name</span>
              <input
                value={values.name}
                onChange={handleChange("name")}
                required
                className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your full name"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">Email</span>
              <input
                value={values.email}
                onChange={handleChange("email")}
                required
                type="email"
                className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-stone-700">
              Preferred Date
            </span>
            <input
              value={values.date}
              onChange={handleChange("date")}
              required
              type="date"
              min={today}
              className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-stone-700">
              Preferred service
            </span>
            <select
              value={values.service}
              onChange={handleChange("service")}
              className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {SERVICES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="text-center py-4">
            <div className="inline-block bg-primary/10 border-2 border-primary rounded-xl px-6 py-3">
              <span className="text-lg font-bold text-primary">
                £{servicePrice}
              </span>
            </div>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-stone-700">
              Notes or questions
            </span>
            <textarea
              value={values.message}
              onChange={handleChange("message")}
              rows={4}
              className="w-full resize-none rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Anything you'd like me to know before our session"
            />
          </label>

          {error ? (
            <p className="mt-3 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </p>
          ) : null}

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-stone-600">
              Prefer to book by email? Send a message to
              <a
                className="ml-1 font-medium text-primary underline"
                href="mailto:whitelotus750@gmail.com"
              >
                whitelotus750@gmail.com
              </a>
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Processing…" : "Proceed to Payment"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
