//import react and use context hook
import React, { useContext } from 'react'

//import context
import { Context } from '../context'

function CartItem({ item }) {
  const { removeToCart } = useContext(Context)

  return (
    <div className='cart-item'>
      <i className='ri-delete-bin-line' onClick={() => removeToCart(item)}/>
      <img src={item.url} width='130px' />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
