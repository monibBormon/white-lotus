import { Link } from "react-router-dom";
import moonImg from "../assets/moon-standard.jpg";
import Layout from "../components/shared/layout";

function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "One on One Session",
      price: "£80",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      details: [
        "We will connect with you over the phone, allowing you to receive healing from the comfort of your home, anywhere in the world. Each session lasts approximately one hour.",
        "Using a kinesiology pendulum and specialized charts, we access the information needed to support your healing process. This approach allows us to quickly tap into the subconscious mind and your soul's records.",
        "We connect with the Creator, Universe, Source, God whatever resonates most with you. This practice helps you align with that higher energy and create a safe, supportive space for healing.",
        "Through the use of specific charts, we communicate directly with your energy to identify imbalances on all levels soul, body, mind, and emotions—recognizing that we are all made of energy.",
        "This process facilitates the retrieval of essential insights while gently uncovering and releasing energetic blockages. When practiced correctly, it encourages deep healing and harmonizes all dimensions of your being.",
      ],
    },
    {
      id: 2,
      title: "Tantric Hawan sacred Fire Ceremony",
      price: "£100",
      image: moonImg,
      details: [
        "The Tantric Hawan is an ancient and deeply sacred fire ritual where powerful mantras and divine offerings are made into the holy fire, awakening potent spiritual energies.",
        "When combined with deep healing practices, this ceremony becomes incredibly powerful, clearing heavy energies, releasing deep blockages, and activating profound healing on an energetic and spiritual level.",
        "The sacred fire amplifies intentions, purifies the energy field, and opens the path for transformation, protection, and abundance.",
        "A powerful experience for those ready to cleanse, heal, and step into a higher vibration.",
      ],
    },
  ];

  return (
    <Layout>
      <div className="mt-20 min-h-screen bg-linear-to-br from-primary/5 via-white to-stone-50">
        <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
              Our Spiritual Services
            </h1>
            <p className="text-lg text-stone-600">
              Transform your life through ancient spiritual practices and
              healing energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-64 md:h-72 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mb-2">
                    {product.title}
                  </h2>
                  {product.subtitle && (
                    <p className="text-sm md:text-base text-stone-600 dark:text-gray-400 mb-4">
                      {product.subtitle}
                    </p>
                  )}
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {product.price}
                  </div>

                  <p className="text-stone-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {product.details.map((detail, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary">
                            <svg
                              className="h-3 w-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-stone-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/book-now"
                    className="inline-block bg-primary hover:bg-pink-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center w-full"
                  >
                    Let's Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductsPage;
