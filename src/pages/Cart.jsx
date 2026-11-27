import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function formatPrice(amount) {
  return '₦' + amount.toLocaleString('en-NG')
}

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart()

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Top: title and Continue Shopping */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <p className="text-sm text-gray-500 mt-1">
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </p>
        </div>
        <Link
          to="/shop"
          className="text-green-700 font-semibold text-sm hover:underline"
        >
          Continue Shopping →
        </Link>
      </div>

      {cart.length === 0 ? (
        /* Empty cart message */
        <div className="mt-8 bg-white border rounded-xl p-10 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link
            to="/shop"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* The list of items */}
          <div className="mt-6 bg-white border rounded-xl divide-y">
            {cart.map((item) => (
              <div key={item.id} className="p-4 flex flex-wrap items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                />

                <div className="flex-1 min-w-35">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {formatPrice(item.price)} each
                  </p>
                </div>

                <p className="font-bold">
                  {formatPrice(item.price * item.quantity)}
                </p>

                {/* Quantity stepper */}
                <div className="flex items-center bg-gray-100 rounded-full">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-9 h-9 text-lg hover:text-green-700"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-9 h-9 text-lg hover:text-green-700"
                  >
                    +
                  </button>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xl hover:scale-110"
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* Total and checkout */}
          <div className="mt-4 bg-white border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-lg font-semibold">
              Total: <span className="font-bold">{formatPrice(totalPrice)}</span>
            </p>
            <button
              onClick={() => alert('Checkout is coming soon!')}
              className="w-full sm:w-auto bg-green-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-800"
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart