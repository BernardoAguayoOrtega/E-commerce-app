//import react
import React from 'react';
//import Link component from react router dom, allow us to set values to switch
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'> <h2>Pic Some</h2> </Link>
      <Link to='/cart'> <i className='ri-shopping-cart-line ri-fw ri-2x' /> </Link>
    </header>
  );
}

export default Header;
