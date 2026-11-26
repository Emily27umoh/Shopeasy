function Hero(){
    return(
        <section className="bg-linear-to-r fromgray-900 to-gray-700 text-white rounded-lg px6 py-16 md-py-6 item-center">
            <h1 className="text-3xl text-center md-text-5xl font-bold capitalize">shop smart.shop <span className="text-amber-400">Easy</span></h1>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">Discover great products at fair prices, delivered straight to your door.</p>

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
        </section>
    )
}

export default Hero