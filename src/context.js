//import react and its hooks
import React, { useState, useEffect } from 'react';
//create react context
const Context = React.createContext();
//functional component that renders the provider context
function ContextProvider({ children }) {
  //use state hook that allow us to have state into a functional component
  const [photos, setPhotos] = useState([])
  //const for url
  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  //use effect hook that allow us to have component life cycle into a functional component
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  console.log(photos)

  return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
}
export { Context, ContextProvider };
