import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginModal from './LoginModal'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { totalItems } = useCart()
  const [showLogin, setShowLogin] = useState(false)
  return (
    <nav className="bg-emerald-500 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        ShopEasy
      </Link> 

      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart ({totalItems})</Link>
        <Link to="/services" className="hover:text-yellow-400">Services</Link>
        <Link to="/shop" className="hover:text-yellow-400">Shop</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
      <button onClick={() => setShowLogin(true)} className="bg-white h-8 text-emerald-500 text-sm px-4 rounded-md hover:bg-yellow-300"> Login </button>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </nav>
  )
}

export default Navbar