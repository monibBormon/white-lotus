import { Sparkles } from "lucide-react";
import Layout from "../components/shared/layout";

const modalities = [
  {
    name: "Vortex Healing",
    description:
      "Clears limiting patterns, restoring emotional balance and energy. Holistic system, guided by divine intelligence, supports healing and spiritual awakening. 'Without a doubt, Vortex Healing is the most profound and transformative experience of my life.'",
  },
  {
    name: "Spiritual Response Therapy (SRT)",
    description:
      "SRT is a quick and accurate spiritual healing technique that helps you remove blocks that prevent you from living a happier life.",
  },
  {
    name: "Integrating Divine Union (IDU)",
    description:
      "This modality is unique and designed to help you heal your connection within or with others, especially the connections in relationships.",
  },
  {
    name: "Galactic Consciousness Therapy (GTC)",
    description:
      "GTC focuses on activation for more and reaching for the power within.",
  },
  {
    name: "Quantum Speed Therapy",
    description:
      "Start healing deeper to integrate more healing. Dive deeper into more and maximize healing.",
  },
  {
    name: "Tantric Practices level 2 of 3",
    description: "Tantric healing practices",
  },
  {
    name: "Mantra Healing Vortex & Maa Kali Healing",
    description: "Shiv Shakti tantric healings",
  },
  {
    name: "Theta Healing",
    description:
      "A meditation technique connects you to Theta brainwaves, allows communication with the unconscious parts of your mind. It works with the Creators energy",
  },
  {
    name: "Magnified Healing",
    description:
      "A form of meditation that uses a fifth higher vibrational frequency, the healing energy of love.",
  },
  {
    name: "Lama Fera & Shalvik Mantra Healing",
    description:
      "An ancient healing technique that originated in the Himalayas centuries ago and uses symbols to facilitate the process.",
  },
  {
    name: "Merkaba healing",
    description:
      "A spiritual practice that uses a geometric energy pattern to link the body and spirit, helping to raise awareness, heal, and grow spiritually.",
  },
  {
    name: "Spell Reversal and Imprint Removal Healing",
    description: "Removes all kinds of negative energies and spells.",
  },
  {
    name: "Owl Wisdom and Empowerment",
    description:
      "Owl spirit animals can help us connect with our own inner wisdom and tap into the power of the divine.",
  },
  {
    name: "Nine Rites of the Munay Ki",
    description:
      "This modality is an initiation to become a person of wisdom and power.",
  },
  {
    name: "Reiki (Usui, Angelic, Money, DNA, Egyptian Anubis)",
    description:
      "Energy healing that uses symbols. There are several different Reiki techniques.",
  },
];

function QualificationsPage() {
  return (
    <Layout>
      <section className="mt-20 py-16 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Modalities Simran has learned over the past decade
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modalities.map((modality, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-stone-50 p-6 rounded-xl shadow-lg border-2 border-primary/20 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Sparkles className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-primary">
                    {modality.name}
                  </h3>
                </div>
                <p className="text-stone-700 leading-relaxed">
                  {modality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default QualificationsPage;
