import React, { useContext } from 'react'
import {PRODUCTS} from '../../product'
import { CartContext } from '../context/shopContext'
import './cart.css'
import {useNavigate} from 'react-router-dom'

export default function Cart() {
  const {addToCart, cartItem, removeFromCart, updateCart, totalAmount} = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <>
    <h1>Cart List</h1>
    {totalAmount() !== 0
    ?(<>
      <div className='cart-list'>
          {PRODUCTS.map(val => {
              return (
                cartItem[val.id] !==0 
                ? <div key={val.id} className='cart-item'>
                      <img src={val.image} width="100" />
                      <p>{val.name}</p>
                      <p>Price: {val.price}</p>
                      <button onClick={() => removeFromCart(val.id)}>-</button>
                      <input type="text" value={cartItem[val.id]} onChange={(e) => updateCart(val.id, parseInt(e.target.value))} width="30" />
                      <button onClick={() => addToCart(val.id)}>+</button>
                  </div>
                : '' 
              )
          })}
      </div>
      <div className='text-center'>
        <h2>Total Amount: ${totalAmount()}/-</h2>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </>)
    :<h2>Your Cart is empty</h2>}
    </>
  )
}
