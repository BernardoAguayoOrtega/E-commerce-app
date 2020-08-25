//import react from react
import React, { useContext } from 'react';
//import context from context
import { Context } from '../context';
//import image component and utils
import Image from '../components/Image';
import { getClass } from '../utils';

function Photos() {
  //use react context hook
  const { photos } = useContext(Context);

  //map through images
  const allImages = photos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />)
  );

  return (
    <main className='photos'>
      {allImages}
    </main>
  );
}

export default Photos;
