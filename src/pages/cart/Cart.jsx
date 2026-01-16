import React, { useContext } from 'react'
import {PRODUCTS} from '../../product'
import { CartContext } from '../context/shopContext'
import './cart.css'
import {useNavigate} from 'react-router-dom'

export default function Cart() {
  const {addToCart, cartItem, removeFromCart, updateCart, totalAmount} = useContext(CartContext)
  const navigate = useNavigate()

  const cartItems = PRODUCTS.filter(val => cartItem[val.id] > 0)
  const total = totalAmount()
  const subtotal = total
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const shipping = subtotal > 100 ? 0 : 10
  const finalTotal = subtotal + tax + shipping

  return (
    <div className='cart-page'>
      <div className='cart-header'>
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
      </div>

      {cartItems.length > 0 ? (
        <div className='cart-container'>
          <div className='cart-items-section'>
            <div className='cart-items'>
              {cartItems.map(val => (
                <div key={val.id} className='cart-item'>
                  <div className='cart-item-image'>
                    <img src={val.image} alt={val.name} />
                  </div>

                  <div className='cart-item-details'>
                    <h3 className='item-name'>{val.name}</h3>
                    <p className='item-category'>{val.category}</p>
                    <div className='item-rating'>
                      <span className='stars'>★★★★★</span>
                      <span className='rating-value'>{val.rating}</span>
                    </div>
                  </div>

                  <div className='cart-item-quantity'>
                    <button 
                      className='qty-btn'
                      onClick={() => removeFromCart(val.id)}
                      title="Remove one item"
                    >
                      −
                    </button>
                    <input 
                      type="number" 
                      min="1"
                      value={cartItem[val.id]} 
                      onChange={(e) => updateCart(val.id, Math.max(1, parseInt(e.target.value) || 1))}
                      className='qty-input'
                    />
                    <button 
                      className='qty-btn'
                      onClick={() => addToCart(val.id)}
                      title="Add one item"
                    >
                      +
                    </button>
                  </div>

                  <div className='cart-item-price'>
                    <p className='unit-price'>${val.price}</p>
                    <p className='item-total'>${val.price * cartItem[val.id]}</p>
                  </div>

                  <button 
                    className='remove-btn'
                    onClick={() => updateCart(val.id, 0)}
                    title="Remove from cart"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className='cart-summary-section'>
            <div className='cart-summary'>
              <h2>Order Summary</h2>

              <div className='summary-row'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className='summary-row'>
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className='summary-row'>
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className='free-shipping'>FREE</span>
                ) : (
                  <span>${shipping.toFixed(2)}</span>
                )}
              </div>

              {shipping > 0 && (
                <p className='shipping-info'>Free shipping on orders over $100</p>
              )}

              <div className='summary-divider'></div>

              <div className='summary-total'>
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              <button className='checkout-btn'>
                Proceed to Checkout
              </button>

              <button 
                className='continue-shopping-btn'
                onClick={() => navigate("/shopping-cart")}
              >
                Continue Shopping
              </button>

              <div className='security-info'>
                <p>🔒 Secure checkout with SSL encryption</p>
                <p>✓ Money-back guarantee</p>
                <p>✓ Free returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='empty-cart'>
          <div className='empty-cart-icon'>🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items yet. Start shopping to find amazing products!</p>
          <button 
            className='btn-primary'
            onClick={() => navigate("/shopping-cart")}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  )
}

