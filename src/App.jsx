import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />

      <main className=" flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App