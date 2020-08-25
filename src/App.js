//import react
import React from 'react';

//import Switch and Route components from react router dom
import { Switch, Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
