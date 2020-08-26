//import react and use context hook
import React, { useState, useContext } from 'react'

//import context
import { Context } from '../context'

function CartItem({ item }) {

  //use state
  const [hovered, setHovered] = useState(false)

  //use context
  const { removeToCart } = useContext(Context)

  //is hovered?
  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
    <div className='cart-item'>
      <i
        className={iconClassName}
        onClick={() => removeToCart(item)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <img src={item.url} width='130px' />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
