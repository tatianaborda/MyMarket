import React from 'react'
import './App.css';
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer.js'
import { Info } from './components/Info.js'
import { ItemDetailContainer } from './components/ItemDetailContainer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/item/:itemId">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/list">
          <ItemListContainer/>
        </Route>
        <Route path="/quienessomos">
          <Info/>
        </Route>
        <Route path="/cart">
        Mi compra
        </Route>
        <Route path="*">
        Not found #404
        </Route>
      </Switch>
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
