//import react and its hooks
import React, { useState } from 'react';
//create react context
const Context = React.createContext();
//functional component that renders the provider context
function ContextProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [photos, setPhotos] = useState([])

  return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
}
export { Context, ContextProvider };
