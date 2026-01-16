import React, { useContext } from 'react'
import {PRODUCTS} from '../../product'
import './shop.css'
import { CartContext } from '../context/shopContext'

export default function Shop() {

    const {addToCart, cartItem} = useContext(CartContext)

  return (
    <div className='shop-page'>
      <div className='shop-header'>
        <h1>Discover Our Products</h1>
        <p>Premium selection of tech, fashion, and accessories</p>
      </div>

      <div className='shop-container'>
        <div className='product-list'>
          {PRODUCTS.map(val => {
            const discount = Math.round(((val.originalPrice - val.price) / val.originalPrice) * 100)
            return (
              <div key={val.id} className='product-card'>
                <div className='product-image-wrapper'>
                  <img src={val.image} alt={val.name} className='product-image' />
                  {val.badge && <span className='product-badge'>{val.badge}</span>}
                  {discount > 0 && <span className='discount-badge'>-{discount}%</span>}
                  <div className='quick-view'>
                    <button className='quick-view-btn'>Quick View</button>
                  </div>
                </div>

                <div className='product-info'>
                  <p className='product-category'>{val.category}</p>
                  <h3 className='product-name'>{val.name}</h3>
                  <p className='product-description'>{val.description}</p>

                  <div className='product-rating'>
                    <span className='stars'>★★★★★</span>
                    <span className='rating-value'>{val.rating}</span>
                    <span className='review-count'>({val.reviews})</span>
                  </div>

                  <div className='product-pricing'>
                    {val.originalPrice !== val.price && (
                      <span className='original-price'>${val.originalPrice}</span>
                    )}
                    <span className='current-price'>${val.price}</span>
                  </div>

                  <div className='product-stock'>
                    {val.stock > 10 && <span className='in-stock'>In Stock</span>}
                    {val.stock <= 10 && val.stock > 0 && (
                      <span className='low-stock'>Only {val.stock} left</span>
                    )}
                    {val.stock === 0 && <span className='out-stock'>Out of Stock</span>}
                  </div>

                  <button 
                    className='add-to-cart-btn'
                    onClick={() => addToCart(val.id)}
                    disabled={val.stock === 0}
                  >
                    Add to Cart
                    {cartItem[val.id] > 0 && (
                      <span className='cart-count'>{cartItem[val.id]}</span>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

