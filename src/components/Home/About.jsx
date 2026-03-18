import simranImg from "../../assets/simran.webp"; // Assuming the image is in assets

function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Simran Kaur
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="order-2 md:order-1">
            <img
              src={simranImg}
              alt="Simran Kaur"
              className="w-full max-w-sm mx-auto shadow-2xl border-4 border-primary/20"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6 text-stone-700 leading-relaxed">
            <p>
              For much of my life, I sensed an unseen barrier holding me back,
              though I could not fully identify its source. In 2017, that began
              to shift. During a shamanic healing session, a practitioner
              identified an energetic block within me, an insight that marked
              the start of a profound journey of self-discovery and healing.
            </p>
            <p>
              Through years of dedicated exploration into energy healing
              practices and spiritual modalities, I uncovered the origin of this
              block, which had been placed in early childhood by my family.
              Though unintentional, it created a barrier that limited my ability
              to access my true gifts.
            </p>
            <p>
              With persistence, study, and the support of a strong community, I
              was able to gradually release this barrier. I had fully cleared
              it, reconnecting with the Creator and unlocking the ability to
              channel energy in its purest form. This breakthrough not only
              deepened my own spiritual alignment but also strengthened my
              capacity to serve as a healer for others.
            </p>
            <p>
              Today, I integrated my lived experience, formal spiritual
              training, and natural channeling abilities to guide and empower
              individuals on their own paths of growth and transformation. My
              mission is clear: to help people achieve alignment, fulfillment,
              happiness and well being across all areas of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
