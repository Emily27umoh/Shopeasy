import { useState, useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'

// The API prices are in dollars. Change this number to the current rate.
const NAIRA_RATE = 1500

const reasons = [
  'Fast & Reliable Delivery',
  'Secure Payments',
  'Easy Returns',
  '24/7 Support',
]

function formatPrice(amount) {
  return '₦' + Math.round(amount).toLocaleString('en-NG')
}

function TrendingProducts() {
  const { addToCart } = useCart()
  const sliderRef = useRef(null)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Request failed')
        }
        const data = await response.json()

        // Reshape each product so it matches what our cart expects
        const cleaned = data.map((item) => ({
          id: item.id,
          name: item.title,
          image: item.image,
          category: item.category,
          rating: item.rating.rate,
          reviews: item.rating.count,
          price: item.price * NAIRA_RATE,
        }))

        setProducts(cleaned)
      } catch (err) {
        console.error(err)
        setError('Could not load products. Check your internet and try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  function scroll(direction) {
    sliderRef.current.scrollBy({ left: direction * 480, behavior: 'smooth' })
  }

  return (
    <section id="products" className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Trending Products</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-9 h-9 rounded-full border hover:bg-gray-100"
          >
            ‹
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-9 h-9 rounded-full border hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="min-w-0">
          {loading && <p className="text-gray-500">Loading products...</p>}

          {error && (
            <div>
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && (
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x [scrollbar-none] [&::-webkit-scrollbar]:hidden"
            >
              {products.map((p) => (
                <div
                  key={p.id}
                  className="snap-start shrink-0 w-56 bg-white border rounded-xl p-3 shadow-sm flex flex-col"
                >
                  <div className="relative bg-white rounded-lg h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain p-2"
                    />
                    <button className="absolute top-2 right-2 bg-white border rounded-full w-8 h-8 text-gray-500 hover:text-red-500">
                      ♡
                    </button>
                  </div>

                  <h3 className="mt-3 font-semibold text-sm line-clamp-2 min-h-10">
                    {p.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    <span className="text-yellow-500">★</span> {p.rating} ({p.reviews} reviews)
                  </p>

                  <p className="mt-1 font-bold">{formatPrice(p.price)}</p>

                  <button
                    onClick={() => addToCart(p)}
                    className="mt-auto pt-0 w-full bg-green-700 text-white rounded-lg py-2 text-sm font-semibold hover:bg-green-800"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="bg-green-50 rounded-xl p-5 h-fit">
          <h3 className="font-bold text-lg">Why Shop With Us?</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-2">
                <span className="bg-green-700 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  ✓
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default TrendingProducts