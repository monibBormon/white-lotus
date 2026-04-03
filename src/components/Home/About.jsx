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
              For years, I felt held back by something I couldn’t fully
              explain—a pattern that kept me stuck, disconnected, and unable to
              step into my full potential.
            </p>
            <p>
              In 2017, everything began to change. Through a powerful healing
              experience, I became aware of a deep-rooted internal block formed
              in early life—one that had been shaping my thoughts, behaviours,
              and sense of self for years.
            </p>
            <p>
              That moment sparked a journey of transformation. I immersed myself
              in energy work, personal development, and spiritual practices,
              committed to understanding and releasing the patterns that were
              holding me back.
            </p>
            <p>
              Over time, I didn’t just create change—I experienced a complete
              shift in how I think, feel, and show up in life. I developed a
              strong sense of clarity, confidence, and connection, along with
              the ability to work deeply with others on their own
              transformation.
            </p>
            <p>
              Now, I help people who feel stuck, overwhelmed, or disconnected
              break through their own internal barriers and step into a more
              aligned, confident, and fulfilling life.
            </p>
            <p>
              Through my work, I combine lived experience, proven techniques,
              and intuitive insight to help you:
            </p>
            <ul>
              <li>– Release limiting patterns and emotional blocks</li>
              <li>– Reconnect with your true self and direction</li>
              <li>Build confidence, clarity, and inner balance</li>
              <li>Create lasting, meaningful change in your life</li>
            </ul>
            <p>
              If you’re ready to move forward and become the version of yourself
              you know you’re capable of being, I’m here to guide you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
