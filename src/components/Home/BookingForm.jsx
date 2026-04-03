import { useMemo, useState } from "react";

const SERVICES = [
  { value: "One to One Session", label: "One to One Session" },
  {
    value: "Tantric Hawan Sacred Fire Ceremony",
    label: "Tantric Hawan Sacred Fire Ceremony",
  },
  {
    value: "Any Question or Queries email me",
    label: "Any Question or Queries email me",
  },
];

const TIME_OPTIONS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

function BookingForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "One to One Session",
    date: "",
    time: "",
    address: "",
    havanPurpose: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const servicePrice =
    values.service === "Any Question or Queries email me"
      ? 0
      : values.service === "One to One Session"
        ? 80
        : 100;

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

    if (!values.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!values.date.trim()) {
      setError("Please select a preferred date.");
      return;
    }

    if (
      values.service !== "Tantric Hawan Sacred Fire Ceremony" &&
      !values.time.trim()
    ) {
      setError("Please select a preferred time.");
      return;
    }

    if (!values.address.trim()) {
      setError("Please enter your full address.");
      return;
    }

    if (
      values.service === "Tantric Hawan Sacred Fire Ceremony" &&
      !values.havanPurpose.trim()
    ) {
      setError("Please enter the list of names for the havan.");
      return;
    }

    setError(null);
    setStatus("sending");

    try {
      const bookingData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        service: values.service,
        date: values.date,
        time: values.time,
        address: values.address,
        havanPurpose: values.havanPurpose,
        message: values.message,
        price: servicePrice,
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      if (response.ok) {
        setStatus("success");
        setError(null);
        // Reset form after successful submission
        setValues({
          name: "",
          email: "",
          phone: "",
          service: "One to One Session",
          date: "",
          time: "",
          address: "",
          havanPurpose: "",
          message: "",
        });
        // Optionally reset status after a delay to hide success message
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send email");
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

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">Phone</span>
              <input
                value={values.phone}
                onChange={handleChange("phone")}
                required
                type="tel"
                className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your phone number"
              />
            </label>

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
          </div>

          {values.service !== "Tantric Hawan Sacred Fire Ceremony" && (
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">
                Preferred Time (UK Time)
              </span>
              <select
                value={values.time}
                onChange={handleChange("time")}
                required
                className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select a time</option>
                {TIME_OPTIONS.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
          )}

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

          {values.service === "Tantric Hawan Sacred Fire Ceremony" && (
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">
                List of names the havan is for:
              </span>
              <textarea
                value={values.havanPurpose}
                onChange={handleChange("havanPurpose")}
                required
                rows={3}
                className="w-full resize-none rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Enter the names for the havan"
              />
            </label>
          )}

          <div className="text-center py-4">
            <div className="inline-block bg-primary/10 border-2 border-primary rounded-xl px-6 py-3">
              <span className="text-lg font-bold text-primary">
                £{servicePrice}
              </span>
            </div>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-stone-700">
              Your full address
            </span>
            <input
              value={values.address}
              onChange={handleChange("address")}
              required
              className="w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Your full address"
            />
          </label>

          {values.service === "Tantric Hawan Sacred Fire Ceremony" && (
            <div className="space-y-2">
              <p className="text-sm text-stone-600">
                Purpose of Ceremony, please add one and specify intension: Few
                examples:
              </p>
              <ul className="text-sm text-stone-600 list-disc list-inside">
                <li>
                  Clear and remove negativity like black magic, dark arts,
                  witch-craft etc
                </li>
                <li>Protection for house, business or people</li>
                <li>Health - List any health issues you have etc</li>
                <li>
                  Business - setting up new business or promoting current etc
                </li>
              </ul>
            </div>
          )}

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

          {status === "success" ? (
            <p className="mt-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Your booking request has been sent successfully! We'll get back to
              you soon.
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
              {status === "sending" ? "Sending…" : "Submit Booking"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
