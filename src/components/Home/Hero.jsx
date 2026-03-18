import bannerImg from "../../assets/banner.png";

function Hero() {
  return (
    <section className="relative mt-28">
      <img
        src={bannerImg}
        className="w-full object-cover object-center h-[400px] md:h-[500px]"
        alt="White Lotus Banner"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Embrace Inner Peace
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your journey to holistic well-being starts here with Simran Kaur.
            Discover your healing journey, rooted in quality and personalised
            care. We're delighted to guide you on your path to happiness and
            wellness.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
