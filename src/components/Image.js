//import react and import use state hook that allow us to work with state
import React, { useState } from 'react';

function Image({ className, img }) {
  //use state hook that allow use state with functional component
  const [hovered, setHovered] = useState()

  return (
    <div className={`${className} image-container`}>
      <img
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        src={img.url}
        className='image-grid'
      />
      {hovered ? <><i className='ri-heart-line favorite' /> <i className='ri-add-circle-line cart' /></> : <></>}
    </div>
  );
}

export default Image
