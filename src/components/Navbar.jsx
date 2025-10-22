import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/shopping-cart">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}
