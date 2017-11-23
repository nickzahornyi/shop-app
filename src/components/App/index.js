import React, { Component } from 'react';

import './style.sass';
import DATA from '../../data.json';

import Header from '../Header';
import Cart from '../Cart';
import List from '../List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: DATA.items,
      view: 'grid',
      cart: false,
      itemsInCart: 0
    };
  }

  render = () => (
    <div className="wrapper">
      <Header
        changeViewToGallery={this.handleChangeViewToGallery}
        changeViewToGrid={this.handleChangeViewToGrid}
        toggleCart={this.handleToggleCart}
        itemsInCart={this.state.itemsInCart}
      />

      <List data={this.state.data} view={this.state.view} />
      {this.state.cart && (
        <Cart getItemsCount={this.handleGetItemsCount} view={this.state.view} />
      )}
    </div>
  );

  handleChangeViewToGallery = () => {
    this.setState({
      view: 'grid'
    });
  };

  handleChangeViewToGrid = () => {
    this.setState({
      view: 'gallery'
    });
  };

  handleToggleCart = () => {
    this.setState({
      cart: !this.state.cart
    });
  };
}

export default App;
