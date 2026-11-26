function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center px-6 py-16 md:py-24"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Dark layer so the text is easy to read */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content sits on top of the dark layer */}
      <div className="relative">
        <h1 className="text-3xl md:text-5xl font-bold">
          Shop Smart. Shop <span className="text-yellow-400">Easy.</span>
        </h1>

        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          Discover great products at fair prices, delivered straight to your door.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300"
          >
            Shop Now
          </a>
          <a
            href="/services"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero