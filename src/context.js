//import react
import React from 'react';
//create react context
const Context = React.createContext();
//functional component that renders the provider context
function ContextProvider({ children }) {
  return <Context.Provider value=''>{children}</Context.Provider>;
}
export { Context, ContextProvider };
