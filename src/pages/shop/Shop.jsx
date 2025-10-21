import React, { useContext } from 'react'
import {PRODUCTS} from '../../product'
import './shop.css'
import { CartContext } from '../context/shopContext'

export default function Shop() {

    const {addToCart, cartItem} = useContext(CartContext)

  return (
    <>
    <div className='product-list'>
        {PRODUCTS.map(val => {
            return (
                <div key={val.id} className='product-item'>
                    <img src={val.image} width="100" />
                    <p>{val.name}</p>
                    <p>Price: {val.price}</p>
                    <button onClick={() => addToCart(val.id)}>Add to Cart 
                        {cartItem[val.id] !== 0 ? cartItem[val.id]: ''}
                    </button>
                </div>
            )
        })}
    </div>
    </>
  )
}
