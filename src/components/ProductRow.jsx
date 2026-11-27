import { useRef } from 'react'
import { useCart } from '../context/CartContext'

const reasons = [
  
]

function formatPrice(amount) {
  return '₦' + Math.round(amount).toLocaleString('en-NG')
}

function ProductRow({ title, products, showWhy = false }) {
  const { addToCart } = useCart()
  const sliderRef = useRef(null)

  function scroll(direction) {
    sliderRef.current.scrollBy({ left: direction * 480, behavior: 'smooth' })
  }

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
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

      <div className={showWhy ? 'grid gap-6 lg:grid-cols-[1fr_18rem]' : ''}>
        <div className="min-w-0">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden"
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
                  className="mt-auto w-full bg-green-700 text-white rounded-lg py-2 text-sm font-semibold hover:bg-green-800"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {showWhy && (
          <aside>
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
        )}
      </div>
    </div>
  )
}

export default ProductRow