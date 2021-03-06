//import react and its hooks
import React, { useState, useEffect } from 'react';

//create react context
const Context = React.createContext();

//functional component that renders the provider context
function ContextProvider({ children }) {

  //use state hook that allow us to have state into a functional component
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  //const for url
  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  //use effect hook that allow us to have component life cycle into a functional component
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  //toggleFavorite function
  function toggleFavorite(id) {
    const updatedArr = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })
    setPhotos(updatedArr)
  }

  //function to add items to card
  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  //function to remove items from cartItems
  function removeToCart(img) {
    const newCartItems = cartItems.filter(item => item.id !== img.id)
    setCartItems(newCartItems)
  }

  //clean the cart
  function emptyCart() {
    setCartItems([])
  }

  return (<Context.Provider value={{ photos,
    toggleFavorite,
    addToCart,
    cartItems,
    removeToCart,
    emptyCart }}
  // eslint-disable-next-line react/jsx-closing-bracket-location
  >
    {children} </Context.Provider>);
}

export { Context, ContextProvider };
