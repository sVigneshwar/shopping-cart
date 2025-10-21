import React, { useState } from 'react'
import { PRODUCTS } from '../../product';

export const CartContext = React.createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for(var i = 1; i <= PRODUCTS.length; i++){
    cart[i] = 0
  }
  
  return cart;
}

export default function ShopContext({children}) {

  const [cartItem, setCartItem] = useState(getDefaultCart())

  const addToCart = (id) => {
    setCartItem(state => ({...state, [id]: state[id]+1}))
    
  }
  const removeFromCart = (id) => {
    setCartItem(state => ({...state, [id]: state[id]-1}))
  }

  const updateCart = (id, newValue) => {
    setCartItem(state => ({...state, [id]: newValue}))
  }

  const totalAmount = () => {
    let total = 0
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let itemInfo = PRODUCTS.find(val => val.id === Number(item))
        total += itemInfo.price * cartItem[item]
      }
    }
    return total
  }
  // console.log(cartItem)

  const contextValue = {cartItem, addToCart, removeFromCart, updateCart, totalAmount} 

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
