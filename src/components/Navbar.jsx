import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../pages/context/shopContext'
import './navbar.css'

export default function Navbar() {
  const { cartItem } = useContext(CartContext)
  
  const cartCount = Object.values(cartItem).reduce((sum, val) => sum + (val || 0), 0)

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/shopping-cart" className='navbar-logo'>
          <span className='logo-icon'>◆</span>
          <span className='logo-text'>TechStore</span>
        </Link>
        
        <div className='nav-menu'>
          <Link to="/shopping-cart" className='nav-link'>Shop</Link>
          <Link to="/shopping-cart" className='nav-link'>About</Link>
          <Link to="/shopping-cart" className='nav-link'>Support</Link>
        </div>

        <Link to="/cart" className='navbar-cart'>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

