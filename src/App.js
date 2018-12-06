import React, { Component } from 'react';
import './App.css';
import Cart from './components/cart';
import Products from './components/products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cart />
          <br />
          <Products />
        </header>
      </div>
    );
  }
}

export default App;
