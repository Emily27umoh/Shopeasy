import { useRef } from 'react'
import { useCart } from '../context/CartContext'

// 👇 EDIT THIS LIST: use YOUR image names
const products = [
  { id: 1, name: 'Children Gown', image: '/slide7.jpg', rating: 4.8, reviews: '2.4k', price: 10000, oldPrice: 15000 },
  { id: 2, name: 'Leather Bag', image: '/slide8.jpg', rating: 4.7, reviews: '1.8k', price: 8000, oldPrice: 10000 },
  { id: 3, name: 'Men Tuxedo', image: '/slide4.jpg', rating: 4.9, reviews: '1.2k', price: 35000, oldPrice: 40000 },
  { id: 4, name: 'Classic Heel', image: '/slide5.jpg', rating: 4.7, reviews: '1.5k', price: 25000, oldPrice: 35000 },
  { id: 5, name: 'Birkin Bag', image: '/slide10.jpg', rating: 4.6, reviews: '900', price: 50000, oldPrice: 65000 },
]

const reasons = [
  'Fast & Reliable Delivery',
  'Secure Payments',
  'Easy Returns',
  '24/7 Support',
  'Improves shopping experience',
  'shop anytime and anywhere',
  'Saves time and effort',
]

function formatPrice(amount) {
  return '₦' + amount.toLocaleString('en-NG')
}

function TrendingProducts() {
const { addToCart } = useCart()
  const sliderRef = useRef(null)

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
        {/* The slider */}
        <div
          ref={sliderRef}
          className="min-w-0 flex gap-4 overflow-x-auto scroll-smooth snap-x [scrollbar-none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="snap-start shrink-0 w-56 bg-white border rounded-xl p-3 shadow-sm"
            >
              <div className="relative bg-gray-100 rounded-lg h-40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 text-gray-500 hover:text-red-500">
                  ♡
                </button>
              </div>

              <h3 className="mt-3 font-semibold text-sm">{p.name}</h3>

              <p className="text-xs text-gray-500 mt-1">
                <span className="text-yellow-500">★</span> {p.rating} ({p.reviews} reviews)
              </p>

              <p className="mt-1">
                <span className="font-bold">{formatPrice(p.price)}</span>
                <span className="text-xs text-gray-400 line-through ml-2">
                  {formatPrice(p.oldPrice)}
                </span>
              </p>
              <button  onClick={() => addToCart(p)} className="mt-3 w-full bg-green-700 text-white rounded-lg py-2 text-sm font-semibold hover:bg-green-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Why shop with us */}
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