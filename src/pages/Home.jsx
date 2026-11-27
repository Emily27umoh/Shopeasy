import Hero from '../components/Hero'
import Categories from '../components/Categories'
import TrendingProducts from '../components/TrendingProducts'


function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <TrendingProducts />

      <section id="products" className="mt-10 p-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <p className="text-gray-600 mt-2">Products will show here soon.</p>
      </section>
    </div>
  )
}

export default Home