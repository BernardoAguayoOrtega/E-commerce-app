//import react and its hook use context
import React, { useContext } from 'react';

//import context
import { Context } from '../context'

//import component
import CartItem from '../components/CartItem'

function Cart() {
  //use context
  const { cartItems } = useContext(Context)

  //calculate total price
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  //map trough array of card items
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  //show message if you don't have elements
  // eslint-disable-next-line eqeqeq
  const shoeElements = () => (cartItems.length < 1 || cartItems == undefined ?
    <h3>You don't have any element in your cart, go back if you have add someone</h3> :
    cartItemElements)

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {shoeElements()}
      <p className='total-cost'>{`Total: ${totalCostDisplay}`}</p>
      <div className='order-button'>
        <button>Place Order</button>
      </div>
    </main>
  )
}

export default Cart
