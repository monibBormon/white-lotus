import simranImage from "../assets/simran.webp";
import Layout from "../components/shared/layout";

function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-stone-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.24),_transparent_55%)]" />
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <img
                  src={simranImage}
                  alt="Simran Kaur"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
                  About Me – Simran Kaur
                </h1>
                <div className="text-stone-600 space-y-4 leading-relaxed">
                  <p>
                    For much of my life, I sensed an unseen barrier holding me back,
                    though I could not fully identify its source. In 2017, that
                    began to shift. During a shamanic healing session, a
                    practitioner identified an energetic block within me—an insight
                    that marked the start of a profound journey of self-discovery
                    and healing.
                  </p>
                  <p>
                    Through years of dedicated exploration into energy healing
                    practices and spiritual modalities, I uncovered the origin of
                    this block, which had been placed in early childhood while my
                    family. Though unintentional, it created a barrier that limited
                    my ability to access my true gifts.
                  </p>
                  <p>
                    With persistence, study, and the support of a strong community,
                    I was able to gradually release this barrier. I had fully
                    cleared it, reconnecting with the Creator and unlocking the
                    ability to channel energy in its purest form. This breakthrough
                    not only deepened my own spiritual alignment but also
                    strengthened my capacity to serve as a healer for others.
                  </p>
                  <p>
                    Today, I integrate my lived experience, formal spiritual
                    training, and natural channeling abilities to guide and empower
                    individuals on their own paths of growth and transformation. My
                    mission is clear: to help people achieve alignment, fulfillment,
                    happiness and well being across all areas of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Unique Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
              My Healing Approach
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Discover the transformative modalities I use to guide you on your
              journey of healing and self-discovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Energy Healing */}
            <div className="group bg-white/70 p-8 rounded-2xl shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                Energy Healing
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Channeling pure universal energy to clear blockages, restore
                balance, and activate your body's natural healing abilities.
              </p>
            </div>

            {/* Shamanic Practices */}
            <div className="group bg-white/70 p-8 rounded-2xl shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                Shamanic Practices
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Ancient wisdom traditions combined with modern consciousness to
                facilitate deep soul-level healing and transformation.
              </p>
            </div>

            {/* Spiritual Guidance */}
            <div className="group bg-white/70 p-8 rounded-2xl shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                Spiritual Guidance
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Personalized mentorship to help you align with your highest
                purpose and navigate life's challenges with clarity and grace.
              </p>
            </div>

            {/* Intuitive Readings */}
            <div className="group bg-white/70 p-8 rounded-2xl shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                Intuitive Readings
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Deep insights into your energy patterns, life purpose, and the
                hidden influences shaping your journey.
              </p>
            </div>

            {/* Meditation & Mindfulness */}
            <div className="group bg-white/70 p-8 rounded-2xl shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-1 hover:shadow-lg backdrop-blur">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                Meditation & Mindfulness
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Guided practices to cultivate inner peace, self-awareness, and
                connection to your authentic self.
              </p>
            </div>

            {/* Holistic Wellness */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v6m0 6v6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                Holistic Wellness
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Comprehensive approach addressing mind, body, and spirit for
                complete well-being and life balance.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-stone-900 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-white mb-4">
                Ready to Begin Your Healing Journey?
              </h3>
              <p className="text-stone-300 mb-6 leading-relaxed">
                Every healing path is unique. Let's explore what resonates with
                your soul and create a personalized approach to your
                transformation.
              </p>
              <button className="bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-stone-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>
          </div>
      </section>
      </div>
    </Layout>
  );
}

export default AboutPage;
