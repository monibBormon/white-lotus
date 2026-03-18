import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/shared/layout";

function TestimonialsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    quote: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Review submitted:", formData);
    alert(
      "Thank you for your review! It will be reviewed before being published.",
    );
    setFormData({ name: "", title: "", quote: "" });
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Entrepreneur",
      quote:
        "Working with Simran transformed how I view my career. I felt a weight lift immediately after our first session. Her energy healing work is truly profound and life-changing.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Healthcare Professional",
      quote:
        "The Theta Healing sessions with Simran helped me release years of stored trauma. I've never experienced such deep healing work. Highly recommended to anyone seeking real transformation.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Emma Williams",
      title: "Creative Director",
      quote:
        "Simran's intuitive readings are incredibly accurate. She identified blockages I didn't even know I had. After her Vortex Healing work, I feel reconnected to my purpose.",
      rating: 5,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      name: "David Martinez",
      title: "Life Coach",
      quote:
        "The Spiritual Response Therapy sessions cleared so many hidden blocks that were preventing my growth. Simran's work is backed by genuine spiritual knowledge and divine grace.",
      rating: 5,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Jessica Lee",
      title: "Wellness Consultant",
      quote:
        "I came for healing and left with profound spiritual awakening. Simran's Integrating Divine Union modality helped me heal my relationship patterns at the deepest level.",
      rating: 5,
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 6,
      name: "Robert Thompson",
      title: "Business Executive",
      quote:
        "Simran's energy work is unmatched. The combination of multiple healing modalities she uses creates a comprehensive healing experience. Life-changing is an understatement.",
      rating: 5,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return slides;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Layout>
      <div className="min-h-screen mt-20 bg-linear-to-br from-primary/5 via-white to-stone-50">
        {/* Testimonials Slider Section */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">
                  The Journey of Others
                </h2>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                  Real stories from those who have experienced transformation
                  through spiritual healing
                </p>
              </div>
              {/* Slider Container */}
              <div className="relative">
                {/* Slides Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {getVisibleSlides().map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`transform transition-all duration-500 ease-out ${
                        index === 1
                          ? "md:scale-105 md:z-10"
                          : "md:scale-95 opacity-60 hidden md:block"
                      }`}
                    >
                      <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden min-h-96 flex flex-col">
                        {/* Gradient Border Effect */}
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                        ></div>

                        {/* Top Gradient Bar */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${testimonial.color}`}
                        ></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Quote */}
                          <p className="text-slate-700 leading-relaxed grow mb-6 italic">
                            "{testimonial.quote}"
                          </p>

                          {/* Divider */}
                          <div className="w-12 h-1 bg-linear-to-r from-slate-300 to-transparent mb-6"></div>

                          {/* Author Info */}
                          <div>
                            <div
                              className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold mb-3`}
                            >
                              {testimonial.name.charAt(0)}
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Slider View */}
                <div className="md:hidden mb-12">
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 overflow-hidden min-h-80">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${testimonials[currentSlide].color} opacity-5`}
                    ></div>
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${testimonials[currentSlide].color}`}
                    ></div>

                    <div className="relative z-10">
                      <p className="text-slate-700 leading-relaxed mb-6 italic">
                        "{testimonials[currentSlide].quote}"
                      </p>

                      <div className="w-12 h-1 bg-linear-to-r from-slate-300 to-transparent mb-6"></div>

                      <div>
                        <div
                          className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonials[currentSlide].color} flex items-center justify-center text-white font-semibold mb-3`}
                        >
                          {testimonials[currentSlide].name.charAt(0)}
                        </div>
                        <h4 className="text-lg font-semibold text-slate-800">
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {testimonials[currentSlide].title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-6 mb-8">
                  <button
                    onClick={prevSlide}
                    className="group relative p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-300"></div>
                  </button>

                  <div className="text-center">
                    <p className="text-slate-600 font-medium">
                      {currentSlide + 1} / {testimonials.length}
                    </p>
                  </div>

                  <button
                    onClick={nextSlide}
                    className="group relative p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  >
                    <ChevronRight size={24} />
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-300"></div>
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 flex-wrap">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-primary w-8"
                          : "bg-stone-300 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review Form Section */}
              <div className="mt-20">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-serif text-stone-900 mb-4">
                      Share Your Experience
                    </h3>
                    <p className="text-stone-600">
                      We'd love to hear about your healing journey. Your
                      testimonial helps others find their path to
                      transformation.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
                  >
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-stone-700 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-stone-700 mb-2"
                        >
                          Your Title/Profession
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="e.g., Entrepreneur, Teacher, Healer"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="quote"
                          className="block text-sm font-medium text-stone-700 mb-2"
                        >
                          Your Testimonial
                        </label>
                        <textarea
                          id="quote"
                          name="quote"
                          value={formData.quote}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                          placeholder="Share your experience and how the healing work transformed your life..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Submit Your Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-20 text-center">
                <div className="bg-gradient-to-r from-primary to-stone-900 rounded-3xl p-12 text-white">
                  <h3 className="text-3xl font-light mb-4">
                    Ready for Your Own Transformation?
                  </h3>
                  <p className="text-lg mb-8 text-white/90">
                    Join our growing community of healed and empowered
                    individuals
                  </p>
                  <NavLink
                    to="/book-now"
                    className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-stone-50 hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
                  >
                    Let's get started
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TestimonialsPage;
