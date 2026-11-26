import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        ShopEasy
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar