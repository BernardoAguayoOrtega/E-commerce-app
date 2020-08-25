//import react and import its hooks
import React, { useContext } from 'react';
//import context
import { Context } from '../context'

function Image({ className, img }) {
  //with object destructuring get toggleFavorite function
  const { toggleFavorite } = useContext(Context)
  //const for display de icons
  const heartIcon = () => {
    if (img.isFavorite) {
      return <i className='ri-heart-fill favorite' onClick={() => toggleFavorite(img.id)}/>
    }
    return <i className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)} />
  }
  const cartIcon = <i className='ri-add-circle-line cart' />

  return (
    <div className={`${className} image-container`}>
      <img
        src={img.url}
        className='image-grid'
      />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}

export default Image
