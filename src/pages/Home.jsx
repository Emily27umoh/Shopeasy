import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Hero />

      <section id="products" className="mt-10">
        <h2 className="text-2xl font-bold">Products</h2>
        <p className="text-gray-600 mt-2">Products will show here soon.</p>
      </section>
    </div>
  )
}

export default Home