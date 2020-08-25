//import react and import its hooks
import React, { useContext } from 'react';
//import context
import { Context } from '../context';
//import prop types
import PropTypes from 'prop-types';

function Image({ className, img }) {
  //with object destructuring get functions from context
  const { toggleFavorite, addToCart, cartItems } = useContext(Context)
  //const for display de icons
  const heartIcon = () => {
    if (img.isFavorite) {
      return <i className='ri-heart-fill favorite' onClick={() => toggleFavorite(img.id)}/>
    }
    return <i className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)} />
  }
  const cartIcon = () => {
    const isInTheCart = cartItems.some(item => item.id === img.id)

    if (isInTheCart) {
      return <i className='ri-shopping-cart-fill cart' />
    }
    return <i className='ri-add-circle-line cart' onClick={() => addToCart(img)}/>
  }

  return (
    <div className={`${className} image-container`}>
      <img
        src={img.url}
        className='image-grid'
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

//use prop types  for Image props
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image
