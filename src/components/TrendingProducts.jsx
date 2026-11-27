import { useState, useEffect } from 'react'
import ProductRow from './ProductRow'

// The API prices are in dollars. Change this number to the current rate.
const NAIRA_RATE = 1500

function TrendingProducts() {
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

  // Pick which products go in each row
  const trending = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8)
  const electronics = products.filter((p) => p.category === 'electronics')
  const fashion = products.filter((p) => p.category.includes('clothing'))
  const jewelery = products.filter((p) => p.category === 'jewelery' )

  return (
    <section id="products" className="p-6 max-w-7xl mx-auto">
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
        <>
          <ProductRow title="Trending Products" products={trending}  />
          <ProductRow title="Electronics" products={electronics} />
          <ProductRow title="Fashion" products={fashion} />
          <ProductRow title="jewelery" products={jewelery} />
        </>
      )}
    </section>
  )
}

export default TrendingProducts