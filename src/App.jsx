import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import ShopContext from './pages/context/shopContext'

export default function App() {
  return (
    <ShopContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/shopping-cart" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContext>
  )
}
