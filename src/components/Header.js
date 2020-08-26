//import react and useContext hook
import React, { useContext } from 'react';

//import context
import { Context } from '../context'

//import Link component from react router dom, allow us to set values to switch
import { Link } from 'react-router-dom';

function Header() {
  const { cartItems } = useContext(Context)

  // eslint-disable-next-line eqeqeq
  const showCartEmpty = () => (cartItems.length < 1 || cartItems == undefined ?
    <i className='ri-shopping-cart-line ri-fw ri-2x' /> :
    <i className='ri-shopping-cart-fill ri-fw ri-2x' />)
  return (
    <header>
      <Link to='/'> <h2>Pic Some</h2> </Link>
      <Link to='/cart'> {showCartEmpty()} </Link>
    </header>
  );
}

export default Header;
